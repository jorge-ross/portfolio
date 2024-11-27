import styled from "@emotion/styled";
import { typography } from "../styles/typography";

const GralContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
`

const DescriptionContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-items: flex-start;
  padding: 1rem 0;
  gap: 5rem;
  padding: 6rem 0;
  width: 80%;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 4rem 0;
    gap: 2rem;
    width: 90%;
  }
`

const Text = styled.p`
  ${typography.text.lg};
  margin: 0;
  color: white;

@media (max-width: 1100px) {
    ${typography.text.lgx};
  }
    
  @media (max-width: 500px) {
    ${typography.text.md};
  }

`

function HomeDescription() {
  return (
    <GralContainer>
      <DescriptionContainer>
        <Text>
        With almost two years of experience in the tech industry, 
        I&#39;ve been dedicated to helping founders and business 
        owners bring their ideas to life through technology.
        
        In this time, 
        I&#39;ve worked on various projects, 
        ranging from simple websites to more complex 
        applications like SaaS platforms.

        <br /> <br /> 

        My distinctive background, transitioning from Behavioral Sciences 
        to technical support, and now as a programmer
        and IT enthusiast, attests that 
        I am a problem-solver with a proven ability 
        to adapt and tackle challenging projects.
        </Text>
        <Text>
        As a 
        <span style={{color: "#93C5FD", fontWeight: 600}}> full-stack developer</span>, 
        I can manage projects from start to finish,
        taking ideas from conception to completion. 
        I&#39;m adept at quickly understanding new concepts and 
        breaking down business requirements for industry-specific 
        systems.
        <br /> <br /> 
        Whether you&#39;re a non-technical founder building your 
        first app or an enterprise looking for fresh talent,  
        I will work closely with you to bring your vision to life, 
        making sure everything runs smoothly and effectively.
        </Text>
      </DescriptionContainer>
    </GralContainer>
  )
}

export default HomeDescription;