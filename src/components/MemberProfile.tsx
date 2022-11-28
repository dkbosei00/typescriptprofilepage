import React from "react";
import "../styles/MemberProfile.css"

type Props = {
    name: string
    role: string
    comment?: string
}

const MemberProfile:React.FC<Props> = ({name, role, comment}) => {
  return (
  <>
    <div id="member">
    <img src={require("../assets/img_avatar.png")} alt="This is the team avatar"/>
    <span id="description">{name}, {role}</span><br/>
    <p>{comment}</p>
    </div>
  </>
  );
};

export default MemberProfile;
