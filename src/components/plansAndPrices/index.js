import React,{useState} from "react";
import Title from "../title";
import ImagePlans from "../imagePlans";
import Button from "../button";
import Value from "../value";
import Modal from "../modal";
import Register from "../register";
import sesi from "../../img/academia-de-musculacao.png";
import sesi2 from "../../img/airobica.jpg";
import sesi3 from "../../img/cardio.jpg";
import './index.css';


const listItems=[
  {
 title: "Combo 1",
 src:sesi,
 alt:"Descrição da imagem",
 price:"99,99"
},
{
  title: "Combo 2",
  src:sesi2,
  alt:"Descrição da imagem",
  price:"100,00"
},
{
  title: "Combo 3",
  src:sesi3,
  alt:"Descrição da imagem",
  price:"199,99"
},

];

function PlansAndPrices() {
  const [selectedCombo,setselectedCombo]=useState(null)
  const handleOpenModal=(index)=>{
    setselectedCombo(index)
  }
  const handleCloseModal=()=>{
    setselectedCombo(null)
  }
  const handlePurchase=()=>{
   alert(`Cadastro para o combo ${selectedCombo +1} realizado com sucesso,entraremos em contato em 24 hr`)
   handleCloseModal() ;
  }
  return (
    <div className="plansAndPrices">
     {
      listItems.map(function(item,index){
        return(
<div>
        <div className='plansContainer'>
            <Title title={item.title}/>
            <ImagePlans src={item.src} alt={item.alt}/>
            <Value price={item.price}/>
            </div>
            
            <div>
            <Button className='buttonBuy' onClick={()=>handleOpenModal(index)} text="Comprar"/>
            <Modal onClose={handleCloseModal} isOpen={selectedCombo===index}>
            <Register/>
            <Button className='buttonRegister' onClick={handlePurchase} text="Cadastrar"/>
            </Modal>        
            </div>
       
        </div>
    )
}
  
)}
</div>
     
    );
  }

export default PlansAndPrices;
