import {useState } from 'react';
const SignUp =()=>{
    const [form, setForm] = useState({
		name: '',
		email: '',
        password:'',
        // repeatPassword:'',
	});
    const registrar=async (e)=>{
     e.preventDefault();
    //  console.log(form);
     await fetch('http://localhost:3006/api/auth/register',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },  
        body:JSON.stringify(form),
     });
     alert('confirma tu cuenta!!!!!!!!')
    //  const data=res.json()

    }
    const handleInput = (e) => {
        

		setForm({...form, [e.target.name]: e.target.value });
	};
    return(
    <div class="sign-container">
<div>
<h2 class="section-title">Crea Una Cuenta</h2>
<form  onSubmit={(e)=>registrar(e)}>
<div class="form-group-container">
    <input autofocus="true" type="text" id="signup-username-input" class="form-input form-input-username" name="name" placeholder="Username" value={form.name} onChange={handleInput}/>
</div>
<div class="form-group-container">
    <input autofocus="true" type="email" id="signup-email-input" class="form-input form-input-username" name="email" placeholder="Username" value={form.email} onChange={handleInput}/>
</div>
<div class="form-group-container">
    <input type="password" class="form-input" name="password" value={form.password} autocomplete="on" placeholder="Crea una contraseña" onChange={handleInput}/>
</div>
{/* <div class="form-group-container">
    <input type="password" class="form-input" name="repeatPassword" autocomplete="false" value={form.repeatPassword} placeholder="Confirma Contraseña" onChange={handleInput}/>
</div> */}
<div class="form-group-container">
    <input  type="submit" class="form-input form-input-submit" value="Registrar"/>
</div>
</form>
<small>¿Ya tienes una cuenta?<a class="mute" href="/users/signin">
    Ingresa</a></small>
</div>
<div class="sign-hero sign-up-img"></div>
</div>

)
}
export default SignUp;