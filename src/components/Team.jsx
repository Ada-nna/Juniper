import React from "react";
import TeamCard from "./cards/TeamCard";
import Team1 from "../assets/team/team1.png";
import Team2 from "../assets/team/team2.png";
import Team3 from "../assets/team/team3.png";
import Team4 from "../assets/team/team4.png";

const Team = () => {
  return (
    <div className="bg-[#133F26] md:px-[96px] md:py-[96px] px-4 py-10">
      <div className="lg:container mx-auto">
        <section className="flex flex-col md:flex-row items-center justify-center gap-4">
          <div>
            <TeamCard
              image={Team1}
              occupation="Endocrinologist"
              name="Dr Ramy Bishay"
              qualification="BSc (Hons), MBBS (Hons), FRACP"
            />
          </div>

          <div>
            <TeamCard
              image={Team2}
              occupation="Specialist GP"
              name="Dr Matthew Vickers"
              qualification="MBBS, FRACGP"
            />
          </div>

          <div>
            <TeamCard
              image={Team3}
              occupation="Health Coach"
              name="Leif Lagesen"
              qualification="APD, BSND (hons), BSportExM"
            />
          </div>

          <div>
            <TeamCard
              image={Team4}
              occupation="Dietitian"
              name="Amelia Bandera"
              qualification="APD, BEx&NutrSci, MNutr&Diet"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Team;
