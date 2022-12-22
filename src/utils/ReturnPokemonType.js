import bug from '../assets/bug.png'
import dark from '../assets/dark.png'
import dragon from '../assets/dragon.png'
import electric from '../assets/electric.png'
import fairy from '../assets/fairy.png'
import fighting from '../assets/fighting.png'
import fire from '../assets/fire.png'
import flying from '../assets/flying.png'
import ghost from '../assets/ghost.png'
import grass from '../assets/grass.png'
import ground from '../assets/ground.png'
import ice from '../assets/ice.png'
import normal from '../assets/normal.png'
import poison from '../assets/poison.png'
import psychic from '../assets/psychic.png'
import rock from '../assets/rock.png'
import steel from '../assets/steel.png'
import water from '../assets/water.png'

export const getTypes = (type) => {
    switch(type) {
      case "Bug":
        return bug;
      case "Dark":
        return dark;
      case "Dragon":
        return dragon;
      case "Electric":
        return electric;
      case "Fairy":
        return fairy;
      case "Fighting":
        return fighting;
      case "Fire":
        return fire;
      case "Flying":
        return flying;
      case "Ghost":
        return ghost;
      case "Grass":
        return grass;
      case "Ground":
        return ground;
      case "Ice":
        return ice;
      case "Normal":
        return normal;
      case "Poison":
        return poison;
      case "Psychic":
        return psychic;
      case "Rock":
        return rock;
      case "Steel":
        return steel;
      case "Water":
        return water;
      default:
        return water;
    }
  };

