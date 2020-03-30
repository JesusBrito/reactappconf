import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
class BadgeNew extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Hero />
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <Badge
                firstName="Jesus"
                lastName="Brito"
                avatarURL="https://scontent-qro1-1.xx.fbcdn.net/v/t1.0-1/p320x320/55869416_2692975030719441_134333979879800832_o.jpg?_nc_cat=101&_nc_sid=7206a8&_nc_eui2=AeFEPPWWTkLE8iQ8ZXADMgBzKgbLIYFD_Lv5lMiLQuVuOY9Bmj6WfGu0FUpR0tF3mgipuHJP226QXhhjIfCUMoqjJZFTDwikOCsOW9F282l6Gw&_nc_oc=AQlCgxGmr1lWTY5k5ex-eJgSpEkb6TV4uBHGyJODksoHhWxBWLFX0dUq3XOOrif7zDY&_nc_ht=scontent-qro1-1.xx&_nc_tp=6&oh=c6df5ca502a488ffb3e0c9ec33f6bd68&oe=5EA65AC3"
                job="Fullstack Developer"
                twitter="@Chucho2911"
              />
            </div>
            <div className="col-md-6">
              <BadgeForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
