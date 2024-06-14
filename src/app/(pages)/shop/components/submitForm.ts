'use server'
export default async function submitForm(formData : HTMLFormElement){
    console.log(formData.get('name'));
}