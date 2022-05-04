import styled from "styled-components"

export function Card({text}){
    return (
        <CardWrapper>
            <p>
                {text}
            </p>
      </CardWrapper>
    )
}

const CardWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 1rem;
    height: 350px;
    width: 380px;
    padding: 4%;
    margin: 20px;
    color: white;
    background: radial-gradient(100% 204.51% at 100% 0%, rgba(17, 246, 212, 0.145) 0%, rgba(255, 255, 255, 0.005) 50%);
    box-shadow: inset -2px 0px 2px -2px #11F6D4, inset 2px 4px 4px rgba(0, 0, 0, 0.3), inset 0px 0px 6px 1px rgba(17, 246, 212, 0.5);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);

    p{
        text-align: center;
        font-size: 1.4rem;
    }
`


const cardLeft = {
    position: "absolute",
    left: "-3rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "24rem",
    borderRadius: "1rem",
    width: "46vw",
    transformStyle: "preserve-3d",
    webkitTransform: "perspective(500px) rotateY(12deg) scale(0.5)",
    mozTransform: "perspective(500px) rotateY(12deg) scale(0.5)",
    transform: "perspective(500px) rotateY(12deg) scale(0.5)",
    padding: "4%",
    background:
      "radial-gradient(100% 204.51% at 100% 0%, rgba(17, 246, 212, 0.145) 0%, rgba(255, 255, 255, 0.005) 50%) ",
    boxShadow:
      "inset -2px 0px 2px -2px #11F6D4, inset 2px 4px 4px rgba(0, 0, 0, 0.3), inset 0px 0px 6px 1px rgba(17, 246, 212, 0.5)",
    backdropFilter: "blur(5px)",
    WebkitBackdropFilter: "blur(5px)",
    color: "white",
  };
  const cardCenter = {
    position: "absolute",
    left: "0",
    right: "0",
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "24rem",
    borderRadius: "1rem",
    width: "46vw",
    backgroundColor: "black",
    webkitTransform: "  scale(0.5) ",
    mozTransform: "  scale(0.5)",
    transform: "  scale(0.5)",
    padding: "4%",
    background: "rgba(255, 255, 255, 0.05)",
    backdropFilter: "blur(5px)",
    WebkitBackdropFilter: "blur(5px)",
    color: "white",
  };
  const cardRight = {
    position: "absolute",
    right: "-20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "24rem",
    borderRadius: "1rem",
    width: "46vw",
    backgroundColor: "black",
    transformStyle: "preserve-3d",
    webkitTransform: "perspective(500px) rotateY(-12deg) scale(0.5)",
    mozTransform: "perspective(500px) rotateY(-12deg) scale(0.5)",
    transform: "perspective(500px) rotateY(-12deg) scale(0.5)",
    padding: "4%",
    background: "rgba(255, 255, 255, 0.05)",
    backdropFilter: "blur(5px)",
    WebkitBackdropFilter: "blur(5px)",
    color: "white",
  };