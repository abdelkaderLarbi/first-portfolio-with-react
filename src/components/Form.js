import './formulaire.css';
import 'bootstrap/dist/css/bootstrap.css';
function Form() {
    return (
<div>
<div className="container mt-5 mb-5">
  <div className="row no-gutters">
    <div className="col-md-4 col-lg-4"><img src="/pic1.jpg" /></div>
    <div className="col-md-8 col-lg-8">
      <div className="d-flex flex-column">
        <div className="d-flex flex-row justify-content-between align-items-center p-5 bg-dark text-white">
          <h3 className="display-5">Abdelkader LARBI</h3><i className="fa fa-facebook" /><i className="fa fa-google" /><i className="fa fa-youtube-play" /><i className="fa fa-dribbble" /><i className="fa fa-linkedin" /></div>
        <div className="p-3 bg-black text-white">
          <h6>Web designer &amp; Developer</h6>
        </div>
        <div className="d-flex flex-row text-white">
          <div className="p-4 bg-primary text-center skill-block">
            <h4>90%</h4>
            <h6>PYTHON</h6>
          </div>
          <div className="p-3 bg-success text-center skill-block">
            <h4>70%</h4>
            <h6>CSS</h6>
          </div>
          <div className="p-3 bg-warning text-center skill-block">
            <h4>80%</h4>
            <h6>HTML</h6>
          </div>
          <div className="p-3 bg-danger text-center skill-block">
            <h4>75%</h4>
            <h6>PHP</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


</div>



  );
}
 export default Form;