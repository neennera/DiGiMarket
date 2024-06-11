export async function login(prevState:any, formData:HTMLFormElement){
    const username = formData.get('username')
    const password = formData.get('password')
    console.log(username, password);
    
}