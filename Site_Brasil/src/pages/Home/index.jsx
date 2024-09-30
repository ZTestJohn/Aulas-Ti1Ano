import Header from "./../../components/Header";
import Container from "./../../components/Container";
import Footer from "./../../components/Footer";
import SectionStructure from "../../components/SectionStructure";

function Home() {
  return (
    <>
      <Header />
      <Container>
        <SectionStructure
          title="Qual a importância da química nos dias atuais?"
          imgpath="https://images.pexels.com/photos/3825379/pexels-photo-3825379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        >
          <p>
            A química é fundamental nos dias atuais, permeando praticamente
            todos os aspectos de nossas vidas. Desde os alimentos que consumimos
            e os medicamentos que utilizamos, até os materiais de construção e
            os eletrônicos que utilizamos diariamente, a química está presente.
            Ela é essencial para o desenvolvimento de novas tecnologias, para a
            produção de energia e para a solução de problemas ambientais. Em
            resumo, a química é a ciência que transforma o mundo ao nosso redor.
          </p>
        </SectionStructure>
        <SectionStructure
          title="Em que áreas a química influencia?"
          imgpath="https://images.pexels.com/photos/3182755/pexels-photo-3182755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        >
          <p>
            A química exerce uma influência profunda em diversas áreas de nossas
            vidas. Na saúde, ela é fundamental para o desenvolvimento de
            medicamentos, a compreensão de processos biológicos e a criação de
            materiais para implantes e próteses. Na indústria, a química está
            presente na produção de uma infinidade de produtos, desde plásticos
            e tintas até fertilizantes e combustíveis. No meio ambiente, a
            química auxilia na compreensão de processos ecológicos, no
            desenvolvimento de tecnologias limpas e na busca por soluções para
            problemas como a poluição. Na agricultura, a química contribui para
            o desenvolvimento de fertilizantes, pesticidas e técnicas de cultivo
            mais eficientes. Em resumo, a química é uma ciência transversal que
            impacta diretamente a qualidade de vida e o desenvolvimento da
            sociedade.
          </p>
        </SectionStructure>
      </Container>
      <Footer />
    </>
  );
}

export default Home;
