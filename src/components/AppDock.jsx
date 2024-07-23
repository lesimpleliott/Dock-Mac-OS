import PropTypes from "prop-types";
import styled from "styled-components";

const size = 55;
const sizeHover = 90;

const AppList = styled.li`
    width: ${size}px;
    height: ${size}px;
    position: relative;
    display: flex;
    justify-content: center;
    transition: all 150ms ease-out;

    @media screen and (min-width: 1024px) {
        &:hover {
            width: ${sizeHover}px;
            height: ${sizeHover}px;
            margin-top: -${sizeHover - size}px;
        }

        // App AVANT et APRÈS app survolée
        &:has(+ .app:hover),
        &:hover + .app {
            width: ${size + ((sizeHover - size) / 3) * 2}px;
            height: ${size + ((sizeHover - size) / 3) * 2}px;
            margin-top: -${((sizeHover - size) / 3) * 2}px;
        }

        // app AVANT/AVANT et APRÈS/APRÈS app survolée
        &:has(+ .app + .app:hover),
        &:hover + .app + .app {
            width: ${size + (sizeHover - size) / 3}px;
            height: ${size + (sizeHover - size) / 3}px;
            margin-top: -${(sizeHover - size) / 3}px;
        }
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
