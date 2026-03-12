 // src/components/Contato.jsx
      import '../assets/contato.css';

 export default function Contato() {
   return ( 
   <>

   <div className="secao-contato">
  <div className="container-contato">
    <h1 className="titulo-contato">Contato</h1>
    
    <div className="bloco-info">
      <h3>E-mail</h3>
      <p>suporte@cursos.com.br</p>
    </div>

    <div className="bloco-info">
      <h3>WhatsApp</h3>
      <p>(81) 98904-1275</p>
    </div>

    <div className ="bloco-info">
      <h3>Endereço</h3>
      <p>R. Oitenta e Dois, 30 - Jardim Paulista, Paulista - PE, 53407-000</p>
    </div>
  </div>
</div>
   </> 
   );
}

