import styled from "styled-components";
import { Link } from "react-router-dom";
import LeftIcon from "../Assets/img/SVG/leftIcon.svg";
import { IconWrapper, Wrapper } from "./MyInfoEdit";
import { Container } from "./MyInfoEdit";
import { BackButton } from "./MyInfoEdit";
import { TitleWrapper } from "./MyInfoEdit";
import { Title } from "./MyInfoEdit";
import LevelIcon from "../Assets/img/SVG/levelIcons/grayLevelIcon.svg";
import { Level } from "../Components/MyPage/Level";

export const MyLevel = () => {
    return (
        <Wrapper>
            <Container>
                <Link to={"/mypage"}>
                    <BackButton src={LeftIcon}></BackButton>
                </Link>
                <TitleWrapper>
                    <Title>내 레벨</Title>
                    <IconWrapper>
                        <Title>조회하기</Title>
                        <img src={LevelIcon} />
                    </IconWrapper>
                </TitleWrapper>
            </Container>
            <Level level={1} />
        </Wrapper>
    );
};
