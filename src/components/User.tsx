import { UserProps } from "../types/user";

import { MdLocationPin } from "react-icons/md";

import { Link } from "react-router-dom";

import classes from "./User.module.css";

function User({
  login,
  avatar_url,
  location,
  followers,
  following,
}: UserProps) {
  return (
    <div className={classes.user}>
      <img src={avatar_url} alt={login} />
      {location && (
        <p className={classes.location}>
          <MdLocationPin />
          <span>{location}</span>
        </p>
      )}
      <div className={classes.stats}>
        <div>
          <p>Seguidores:</p>
          <p className={classes.number}>{followers}</p>
        </div>
        <div>
          <p>Seguindo:</p>
          <p className={classes.number}>{following}</p>
        </div>
      </div>
      <Link to={`/github_finder/repos/${login}`}> Ver melhores projetos</Link>
    </div>
  );
}

export default User;
