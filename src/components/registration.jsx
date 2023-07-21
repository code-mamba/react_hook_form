import {useForm} from 'react-hook-form'

// const{register,handleSubmit} = useForm()
const RegisteForm = () =>{
	const{register,handleSubmit, formState:{errors}} = useForm({
		mode: "onChange"
	})


	const onFormSubmit = (data)=>{
			console.log(data)
	}
	const onErrors = (err) =>{
		console.log(err)
	}
	return(
		<>
		<div>
			<form onSubmit={handleSubmit(onFormSubmit,onErrors)}>
				<div>
					<label>Name</label>
				
			<input type="text" name="Name" {...register('Name',{required:"Name is required"})} placeholder="FirstName"></input>
			{errors.Name?(<p style={{color:'red'}}>{errors.Name.message}</p>):null}
			</div>
			<div>
				<label>Email</label>
				<input type="email" name="email"{...register('email',{required:"Email is required"})} placeholder='enter your email'></input>
				{errors.email?(<p style={{color:'red'}}>{errors.email.message}</p>):null}
			</div>
			<div>
				<label>Password</label>
				<input type='password' name="password" {...register('password',{required:"Password is required",minLength:{value:8,message:"Password must have atleast 8 charcters"}})} placeholder="enter your password"></input>
				{errors.password?(<p style={{color:'red'}}>{errors.password.message}</p>):null}
			</div>
			<button type='submit'>Submit</button>
			</form>
		</div>
		
		</>
	)
}
export default RegisteForm