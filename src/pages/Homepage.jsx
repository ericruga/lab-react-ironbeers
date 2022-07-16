import { Link, NavLink } from "react-router-dom";
import Beers from "./../assets/beers.png";
import NewBeer from "./../assets/new-beer.png";
import RandomBeer from "./../assets/random-beer.png";
// import Header from "./../components/Header"


function Homepage() {
  return (
    <div>
    {/* <Header/> */}
      <h1>HOME PAGE</h1>
      <Link to="/beers">
      <img src={Beers} alt="beers" className="beers" height="600px"/>
        <h3>Beers</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam metus sapien, consequat at aliquam vel, aliquam id erat. Proin scelerisque porta porttitor. Donec feugiat enim lobortis sem tristique sollicitudin. Morbi eu augue sed leo scelerisque luctus nec cursus eros. Ut quis congue felis, tincidunt rhoncus lorem. Curabitur at elit lectus. Aenean tincidunt scelerisque pulvinar. Aenean quis odio vestibulum quam gravida convallis eget at sapien. In vitae massa massa. Cras volutpat condimentum magna, sed posuere mauris euismod a. Nunc eleifend tincidunt elit vitae dictum. Vivamus eu odio vel dolor tincidunt posuere at non ipsum.</p>
      </Link>
      <Link to="/random-beer">
      <img src={RandomBeer} alt="randombeer" className="beers" height="600px"/>
        <h3>Random Beer</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam metus sapien, consequat at aliquam vel, aliquam id erat. Proin scelerisque porta porttitor. Donec feugiat enim lobortis sem tristique sollicitudin. Morbi eu augue sed leo scelerisque luctus nec cursus eros. Ut quis congue felis, tincidunt rhoncus lorem. Curabitur at elit lectus. Aenean tincidunt scelerisque pulvinar. Aenean quis odio vestibulum quam gravida convallis eget at sapien. In vitae massa massa. Cras volutpat condimentum magna, sed posuere mauris euismod a. Nunc eleifend tincidunt elit vitae dictum. Vivamus eu odio vel dolor tincidunt posuere at non ipsum.</p>
      </Link>
      <Link to="/new-beer">
      <img src={NewBeer} alt="newbeer" className="beers" height="600px"/>
        <h3>New Beer</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam metus sapien, consequat at aliquam vel, aliquam id erat. Proin scelerisque porta porttitor. Donec feugiat enim lobortis sem tristique sollicitudin. Morbi eu augue sed leo scelerisque luctus nec cursus eros. Ut quis congue felis, tincidunt rhoncus lorem. Curabitur at elit lectus. Aenean tincidunt scelerisque pulvinar. Aenean quis odio vestibulum quam gravida convallis eget at sapien. In vitae massa massa. Cras volutpat condimentum magna, sed posuere mauris euismod a. Nunc eleifend tincidunt elit vitae dictum. Vivamus eu odio vel dolor tincidunt posuere at non ipsum.</p>
      </Link>
      

    </div>
  );
}

export default Homepage;