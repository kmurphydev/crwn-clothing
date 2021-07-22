import React, { Profiler } from "react";
import Directory from "../../components/directory/directory.component";

import { HomePageContainer } from "./homepage.styles";

const HomePage = () => (
  <HomePageContainer>
    <Profiler id="Directory" onRender={(id, phase, actualDuration) => {
        console.log({
            id,
            phase, //mount phase or rerender
            actualDuration, //time in milliseconds
        });
    }}>
      <Directory />
    </Profiler>
  </HomePageContainer>
);

export default HomePage;
