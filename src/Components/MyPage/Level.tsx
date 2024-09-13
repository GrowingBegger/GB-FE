import styled from "styled-components";
import ZeroIcon from "../../Assets/img/SVG/levelIcons/zero.svg";
import OneIcon from "../../Assets/img/SVG/levelIcons/one.svg";
import TwoIcon from "../../Assets/img/SVG/levelIcons/two.svg";
import ThreeIcon from "../../Assets/img/SVG/levelIcons/three.svg";
import FourIcon from "../../Assets/img/SVG/levelIcons/four.svg";
import FiveIcon from "../../Assets/img/SVG/levelIcons/five.svg";
import SixIcon from "../../Assets/img/SVG/levelIcons/six.svg";
import SevenIcon from "../../Assets/img/SVG/levelIcons/seven.svg";
import WhiteIcon from "../../Assets/img/SVG/levelIcons/white.svg";
import React, { useEffect, useState } from "react";
import { Color } from "../../styles/Color";

interface LevelProps {
    level: number;
}

const levelIcons = [ZeroIcon, OneIcon, TwoIcon, ThreeIcon, FourIcon, FiveIcon, SixIcon, SevenIcon];

export const Level: React.FC<LevelProps> = ({ level }) => {
    const [icons, setIcons] = useState({
        left: level > 0 ? levelIcons[level - 1] : null,
        center: levelIcons[level],
        right: level < 7 ? levelIcons[level + 1] : null,
    });

    useEffect(() => {
        setIcons({
            left: level > 0 ? levelIcons[level - 1] : null,
            center: levelIcons[level],
            right: level < 7 ? levelIcons[level + 1] : null,
        });
    }, [level]);

    return (
        <LevelWrapper>
            <LevelContainer>
                {level === 0 ? <Left src={WhiteIcon} /> : icons.left && <Left src={icons.left} />}
                <img src={icons.center} />
                {level === 7 ? <Right src={WhiteIcon} /> : icons.right && <Right src={icons.right} />}
            </LevelContainer>
            <StateBarWrapper>
                {Array.from({ length: 8 }, (_, index) => (
                    <React.Fragment key={index}>{index === level ? <Point /> : <Circle />}</React.Fragment>
                ))}
                {/* React.Fragment는 요소들을 그룹화할때 사용 */}
                {/* index가 현제 레벨이면 Point를 보여주고 아니면 Circle을 보여주는 로직 */}
            </StateBarWrapper>
        </LevelWrapper>
    );
};

const Circle = styled.div`
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #eeeeee;
`;

const Point = styled.div`
    width: 35px;
    height: 8px;
    border-radius: 30px;
    background-color: ${Color.color1};
`;

const StateBarWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
`;

const LevelWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 45px;
    align-items: center;
`;

const LevelContainer = styled.div`
    display: flex;
    overflow: hidden;
    justify-content: center;
    width: 100vw;
    align-items: center;
    margin-top: 94.69px;
`;

const Left = styled.img`
    width: 218px;
    height: 325px;
`;

const Right = styled.img`
    width: 218px;
    height: 325px;
`;
