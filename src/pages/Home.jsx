import React, { useEffect, useState } from "react";
import Tabs from "../components/utils/Tabs";
import Characters from "../components/Character/Characters";
import Movies from "../components/Movies/Movies";
import { useUserContext } from "../context/UserProvider";
import { useGetSessionActiveContext } from "../context/UserProvider";

const Home = () => {
  const [component, setComponent] = useState(<></>);
  const getUserContext = useGetSessionActiveContext();
  let user = useUserContext();

  const [tab, setTab] = useState(0);
  //const [characters, setCharacters] = useState([]);

  /***
   * 
   * NO DESCOMENTAR ESTO PORQUE SE FUETEA LA APPLICACION 
   * useEffect(() => {
    functions.getCharacters().then((data) => {
      setCharacters(data.data);
    });
  }, []);

   * 
   * */
  useEffect(() => {
    const fetchUser = async () => {
      if (user === null) {
        user = await getUserContext();
      }
    };
    fetchUser();
  }, []);

  useEffect(() => {
    switch (tab) {
      case "0":
        setComponent(<Characters characters={[]} />);
        break;
      case "1":
        setComponent(<Movies />);
        break;
      case "2":
        setComponent(<h1>3</h1>);
        break;
      default:
        setComponent(<h1>Selecciona una pestaña</h1>);
        break;
    }
  }, [tab]);

  return (
    <>
      <div>Hola</div>
      <p>{user?.firstName}</p>
      <div>
        <Tabs
          tabsNames={["Personajes", "Peliculas", "Pociones"]}
          onChangeTab={(value) => {
            setTab(value);
          }}
        />
        <div>{component}</div>
      </div>
    </>
  );
};

export default Home;
