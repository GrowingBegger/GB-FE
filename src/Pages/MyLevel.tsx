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
import { getUserInfo } from "../Apis/user/user";
import { getUserInfoType } from "../Apis/user/type";
import { useEffect, useState } from "react";

export const MyLevel = () => {
    const [myLevel, setMyLevel] = useState<getUserInfoType | null>(null);

    useEffect(() => {
        getUserInfo()
            .then((response) => {
                setMyLevel(response.data);
            })
            .catch((error) => {
                console.error("레벨 조회 오류:", error);
            });
    }, []);

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
            {myLevel && <Level level={myLevel.userRank} />}
        </Wrapper>
    );
};
