import React from "react";
import MemberProfile from "../components/MemberProfile";
import { PageText } from "../styles/my-theme";

const Team:React.FC = () => {
  return (
    <>
  <PageText>
    Team
    </PageText>
    <MemberProfile name="John Doe" role="Head Analyst" comment="Working with the team is very fun!"/>
    <MemberProfile name="Jane Doe" role="Research Assisstant"/>
    <MemberProfile name="Jack Smith" role="Branch Manager" comment="I wouldn't change my job for the world!"/>
    </>
  );
};

export default Team;
