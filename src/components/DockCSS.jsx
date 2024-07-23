import styled from "styled-components";
import dataApp from "../assets/datas/app.json";
import AppDock from "./AppDock";

const DockCSS = () => {
  return (
    <Dock>
      <ul>
        {dataApp.map((app, index) => (
          <AppDock key={index} data={app} />
        ))}
      </ul>
    </Dock>
  );
};

const Dock = styled.div`
  padding: 2px 4px;
  border-radius: 16px;
  border: solid 2px rgb(148, 148, 148);
  background: linear-gradient(
    rgba(255, 255, 255, 0.4),
    rgba(255, 255, 255, 0.2)
  );

  ul {
    display: flex;
    align-items: end;
    list-style: none;

    @media screen and (max-width: 1024px) {
      padding: 10px;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-gap: 20px;
    }
  }
`;

export default DockCSS;
