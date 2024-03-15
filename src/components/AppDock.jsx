import PropTypes from "prop-types";
import styled from "styled-components";

const AppList = styled.li`
    width: 60px;
    height: 60px;
    position: relative;
    display: flex;
    justify-content: center;
    transition: all 200ms ease-out;

    &:hover {
        width: 90px;
        height: 90px;
        margin-top: -30px;
    }

    // App AVANT et APRÈS app survolée
    &:has(+ .app:hover),
    &:hover + .app {
        width: 80px;
        height: 80px;
        margin-top: -20px;
    }

    // app AVANT/AVANT et APRÈS/APRÈS app survolée
    &:has(+ .app + .app:hover),
    &:hover + .app + .app {
        width: 70px;
        height: 70px;
        margin-top: -10px;
    }
`;

const Icon = styled.img`
    width: 100%;
    height: 100%;
`;

const Name = styled.span`
    padding: 5px 10px;
    position: absolute;
    top: -33px;
    text-align: center;
    text-wrap: nowrap;
    color: #ffffff;
    background: #000000;
    border-radius: 5px;
    opacity: 0;

    ${AppList}:hover & {
        opacity: 1;
    }
`;

const AppDock = ({ data }) => {
    return (
        <AppList className="app">
            <Name className="appName">{data.name}</Name>
            <Icon className="icon" src={data.icon} />
        </AppList>
    );
};

AppDock.propTypes = {
    data: PropTypes.shape({
        name: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
    }).isRequired,
};

export default AppDock;
