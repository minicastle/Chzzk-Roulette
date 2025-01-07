import styled from "@emotion/styled";
import { User } from "../types/user";
import { dataSet } from "../types/donation";
import { useCallback } from "react";
const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 800px;
  height: 800px;
  flex-direction: column;
  gap: 10px;
`;
const BarContainer = styled.div`
  width: 300px;
  height: 50px;
  border: 5px solid #9e9e9e;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  position: relative;
`;
const BarList = styled.div<{ length: number }>`
  transition: 300ms;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
  position: absolute;
  animation: BarLoad 2s ease-in-out both;
  animation-delay: 1s;
  @keyframes BarLoad {
    from {
      top: 0px;
    }
    70% {
      top: ${({ length }) => (length - 1) * -50 + 25 + "px"};
    }
    to {
      top: ${({ length }) => (length - 2) * -50 + "px"};
    }
  }
`;
const BarItem = styled.div`
  background-color: #3b3b3b;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  min-height: 50px;
  width: 100%;
  font-weight: bold;
  font-size: 20px;
  animation: FontUpper 500ms ease both;
  animation-delay: 3s;
  @keyframes FontUpper {
    from {
      font-size: 1em;
    }
    25% {
      font-size: 1.7em;
    }
    50% {
      font-size: 1.3em;
    }
    70% {
      font-size: 1.6em;
    }
    to {
      font-size: 1.5em;
    }
  }
`;
const BarInfo = styled.div`
  width: 500px;
  font-size: 25px;
  text-align: center;
`;
const Nick = styled.span`
  font-weight: bold;
  color: black;
  font-size: 30px;
`;
const Prize = styled.span`
  font-weight: bold;
  color: gray;
  font-size: 20px;
  animation: Visible 300ms linear both;
  animation-delay: 3s;
  @keyframes Visible {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
interface Props {
  targetData: dataSet[];
  user: User;
  price: number;
}
function BarRoulette({ targetData, user, price }: Props) {
  function shuffle(array: dataSet[]) {
    array.sort(() => Math.random() - 0.5);
  }
  const itemGen = useCallback(() => {
    let contents: dataSet[] = [];
    for (let i = 0; i < targetData.length; i++) {
      contents.push(...new Array(targetData[i].percent).fill(targetData[i]));
    }
    shuffle(contents);
    contents = contents.slice(0, 20);
    console.log(contents);
    let constructor = [];
    for (let i = 0; i < contents.length; i++) {
      constructor.push(
        <BarItem key={`barItem ${i}`}>{contents[i]?.value}</BarItem>
      );
    }
    user.prize.push({
      orderPrice: price,
      targetRoulette: "bar",
      orderNick: user.nickName,
      orderId: user.id,
      prize: contents[18].value,
      desc: contents[18].desc,
    });
    return constructor;
  }, [price, targetData, user.id, user.nickName]);
  return (
    <MainContainer>
      <BarContainer>
        <BarList length={20}>{itemGen()}</BarList>
      </BarContainer>
      <BarInfo>
        <Nick>{user.nickName}</Nick>님이 룰렛을 돌렸습니다! <br />
        <Prize>{user.prize[user.prize.length - 1].desc}</Prize>
      </BarInfo>
    </MainContainer>
  );
}

export default BarRoulette;
