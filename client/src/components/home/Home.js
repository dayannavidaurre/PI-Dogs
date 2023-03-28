import React from "react";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { getDogs, filterDogsByAlphabet, filterDogsByCreatedMode, filterDogsByWeight, getTemperaments,filterDogsByTemperament, setCurrentPage } from "../../redux/actions/index.js";
import { Link } from "react-router-dom";
import DogCard from "../dogCard/DogCard.js";
import NavBar from "../navBar/NavBar";
import Pagination from "../paginado/Pagination.js";
import "./Home.css";
import SearchBar from "../searchBar/SearchBar";
import Error from "../error/Error.js";
import Loading from "../loading/Loading.js";


const Home = () =>{


  const dispatch = useDispatch(); //mapDispachToProps
  const { allDogs: dogs, allTemperaments: temperaments, loading, error, currentPage } = useSelector((state) => state);//mapStateToProps

  //---------------------PAGINADO


  const [dogsPage, setDogsPage] = useState(8);
  const indexOfLastDogs = currentPage * dogsPage;
  const indexOfFirstDogs = indexOfLastDogs - dogsPage;
  const currentDogs = dogs.slice(indexOfFirstDogs, indexOfLastDogs);

  const pagination = (pageNumber)=>{
    dispatch(setCurrentPage(pageNumber));
  };

  //----------------------FILTRADO----------------//
  const [filter, setFilter] = useState("");

  const filterCreation = (e) =>{
    e.preventDefault();
    dispatch(filterDogsByCreatedMode(e.target.value));
    pagination(1);
  };

  const filterWeight = (e)=>{
    e.preventDefault();
    dispatch(filterDogsByWeight(e.target.value));
    pagination(1);
    setFilter(`FILTER_BY_WEIGHT ${e.target.value}`);
  }

  const filterTemperament = (e)=>{
    e.preventDefault();
    dispatch(filterDogsByTemperament(e.target.value));
  }

  const filterAlphabet  =(e)=>{
    e.preventDefault();
    // console.log(e.target.value);
    dispatch(filterDogsByAlphabet(e.target.value));
    pagination(1);
    setFilter(`FILTER_BY_ALPHABET ${e.target.value}`);

  }
//--------------------------------------------
  //actualiza el estado de la pagina y le pasaremos como prop al componente SearchBar //
  const updateCurrentPage = () =>{
    pagination(1);
  }

  useEffect(() => {//componentDidMount

      if(!dogs.length) dispatch(getDogs())
       dispatch(getTemperaments())
    },[])


    return (
      <div>
        {loading ? (
          <Loading />
        ) : (
          <div className="container-home">
            <NavBar />
            {/* <div className="container-btnCreate">
              <div className="create-info">
                <h1>CREATE</h1>
                <h1>YOUR</h1>
                <h1>DOG</h1>
              </div>
              <div className="btnCreate">
                <Link to="/create">
                  <button>Lets go</button>
                </Link>
              </div>
            </div> */}
            <div className="container-info">
              <div className="filtros">
                <SearchBar updateCurrentPage={updateCurrentPage} />

                <select
                  defaultValue="title"
                  onChange={(e) => filterTemperament(e)}
                >
                  <option value="title">Filter by temperament</option>
                  <option value="All">All Temperaments</option>
                  {temperaments &&
                    temperaments.map((el, i) => {
                      return (
                        <option key={`${i}${el.name}`} value={el.name}>
                          {el.name}
                        </option>
                      );
                    })}
                </select>

                {/* onChange se activara cada vez ue el usuario cambie la opcion seleccionada  */}
                <select
                  defaultValue="title"
                  onChange={(e) => filterAlphabet(e)}
                >
                  <option value="title">Order by Alphabet</option>
                  <option value="asce">A to Z</option>
                  <option value="desc">Z to A</option>
                </select>
                <select onChange={(e) => filterWeight(e)}>
                  <option value="title">Order by weigth</option>
                  <option value="Heavy">Heavy</option>
                  <option value="Lightweight">Lightweight</option>
                </select>
                <select onChange={(e) => filterCreation(e)}>
                  <option value="All">All</option>
                  <option value="Created">Created</option>
                  <option value="Existing">Existing</option>
                </select>
              </div>
              <div className="container-card">
                {error ? (
                  <Error msg={error.error} />
                ) : (
                  currentDogs &&
                  currentDogs.map((el, i) => (
                    <Link key={`${i}${el.id}`} to={`/home/${el.id}`}>
                      <DogCard
                        key={el.id.toString()}
                        name={el.name}
                        image={el.image}
                        weight={el.weight}
                        life_span={el.life_span}
                        temperament={
                          Array.isArray(el.temperament)
                            ? el.temperament.join(", ")
                            : ""
                        }
                      />
                    </Link>
                  ))
                )}
              </div>
              <Pagination
                dogsPage={dogsPage}
                allDogs={dogs.length}
                pagination={pagination}
              />
            </div>
          </div>
        )}
      </div>
    );
}

export default Home;