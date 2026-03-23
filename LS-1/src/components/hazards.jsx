import i1 from '../assets/i1.png';
import i2 from '../assets/i2.png';
import i3 from '../assets/i3.png';
import i4 from '../assets/i4.png';
import i5 from '../assets/i5.png';
import i6 from '../assets/i6.png';
import i7 from '../assets/i7.png';
import i8 from '../assets/i8.png';
import i9 from '../assets/i9.png';
import i10 from '../assets/i10.png';
import i11 from '../assets/i11.png';
import i12 from '../assets/i12.png';
import '../styles/hazards.css';
import Navbar from './navbar';

function Hazards(){
    return (
        <div>
            <Navbar />
            <div className="wrapper">
                <h1>Present Health Hazards</h1>
                <div className="container">
                    <div className="box">
                        <img src={i1}/>
                        <h3>COVID-19</h3>
                        <p>The coronavirus is a highly contagious respiratory virus that has caused a global pandemic, leading to significant health, economic, and social impacts worldwide.</p>
                        <a href="https://en.wikipedia.org/wiki/COVID-19" className="h-btn" target='_blanck'>read more</a> 
                    </div>
                    <div className="box">
                        <img src={i2}/>
                        <h3>Ebola Virus</h3>
                        <p>Caused by various strains of the Ebola virus, outbreaks in Africa have caused severe illness and high mortality rates, with the 2014-2016 West African Ebola outbreak being particularly devastating.</p>
                        <a href="https://en.wikipedia.org/wiki/Ebola" className="h-btn" target='_blanck'>read more</a> 
                    </div>
                    <div className="box">
                        <img src={i3}/>
                        <h3>HIV/AIDS</h3>
                        <p>The Human Immunodeficiency Virus (HIV) leads to Acquired Immunodeficiency Syndrome (AIDS), causing a global epidemic with significant health and social impacts.</p>
                        <a href="https://en.wikipedia.org/wiki/HIV/AIDS" className="h-btn" target='_blanck'>read more</a> 
                    </div>
                    <div className="box">
                        <img src={i4}/>
                        <h3>Norovirus</h3>
                        <p> Responsible for widespread outbreaks of gastrointestinal illness, commonly associated with foodborne and person-to-person transmission. Caused by outbreaks of gastrointestinal illness</p>
                        <a href="https://en.wikipedia.org/wiki/Norovirus" className="h-btn" target='_blanck'>read more</a> 
                    </div>
                    <div className="box">
                        <img src={i5}/>
                        <h3>Zika Virus</h3>
                        <p>This mosquito-borne virus gained attention due to its association with birth defects, particularly microcephaly, leading to public health concerns and efforts to control mosquito populations.</p>
                        <a href="https://en.wikipedia.org/wiki/Zika_virus" className="h-btn">read more</a> 
                    </div>
                    <div className="box">
                        <img src={i6}/>
                        <h3>H1N1 Influenza (Swine Flu)</h3>
                        <p>The H1N1 influenza virus caused a pandemic in 2009-2010, affecting millions of people worldwide and resulting in substantial illness and healthcare challenges.</p>
                        <a href="https://en.wikipedia.org/wiki/Swine_influenza" className="h-btn">read more</a> 
                    </div>
                    <div className="box">
                        <img src={i7}/>
                        <h3>Chickenpox</h3>
                        <p>Chickenpox is a highly contagious viral infection characterized by itchy skin rashes and is caused by the varicella-zoster virus. Chickenpox typically causes fever and blisters, especially in children.</p>
                        <a href="https://en.wikipedia.org/wiki/Chickenpox" className="h-btn">read more</a> 
                    </div>           
                    <div className="box">
                        <img src={i8}/>
                        <h3>Diabetes</h3>
                        <p>Diabetes is a chronic metabolic disorder characterized by high blood sugar levels due to inadequate insulin production or ineffective use of insulin by the body.</p>
                        <a href="https://en.wikipedia.org/wiki/Diabetes" className="h-btn">read more</a> 
                    </div>
                    <div className="box">
                        <img src={i9}/>
                        <h3>Asthma</h3>
                        <p>Asthma is a chronic respiratory condition characterized by inflammation of the airways, leading to recurrent episodes of wheezing, coughing, chest tightness, and difficulty breathing.</p>
                        <a href="https://en.wikipedia.org/wiki/Asthma" className="h-btn">read more</a> 
                    </div>
                    <div className="box">
                        <img src={i10}/>
                        <h3>Cytomegalovirus</h3>
                        <p>Cytomegalovirus (CMV) is a common herpesvirus that can cause mild to severe symptoms, particularly affecting immunocompromised individuals and newborns.</p>
                        <a href="https://en.wikipedia.org/wiki/Cytomegalovirus" className="h-btn">read more</a> 
                    </div>
                    <div className="box">
                        <img src={i11}/>
                        <h3>Human papillomavirus infection</h3>
                        <p>Human papillomavirus infection (HPV infection) is caused by a DNA virus from the Papillomaviridae family. Vaccinating can prevent it from occuring.</p>
                        <a href="https://en.wikipedia.org/wiki/Cytomegalovirus" className="h-btn">read more</a> 
                    </div>
                    <div className="box">
                        <img src={i12}/>
                        <h3>Hepatitis B</h3>
                        <p>Hepatitis B Virus (HBV) is a blood-borne virus that can cause acute and chronic liver infections, leading to liver damage, cirrhosis, and an increased risk of liver cancer.</p>
                        <a href="https://en.wikipedia.org/wiki/Hepatitis_B" className="h-btn">read more</a> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hazards;