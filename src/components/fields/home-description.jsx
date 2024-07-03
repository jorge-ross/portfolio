import styled from "@emotion/styled";
import { typography } from "../../styles/typography";


const DescriptionContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-items: flex-start;
  padding: 1rem 0;
  width: 60%;
  gap: 5rem;
  padding: 6rem 0;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 4rem 0;
  }
`

const Text = styled.div`
  ${typography.text.lg};
  color: white;
`

function HomeDescription() {
  return (
    <DescriptionContainer>
      <Text>
      For almost two years of experience in the tech industry, 
      I&#39;ve been dedicated to helping founders and business 
      owners bring their ideas to life through technology.
      
      In this time, 
      I&#39;ve worked on various projects, 
      ranging from simple websites to more complex 
      applications like SAAS platforms.

      <br /> <br /> 

      My distinctive background, spanning 
      from mechatronics engineering to
      mental health professional, and now as a programmer
      and IT enthusiast, attests that 
      I am a problem-solver with a proven ability 
      to adapt and tackle challenging projects.
      </Text>
      <Text>
      As a full-stack developer, 
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
  )
}

export default HomeDescription;