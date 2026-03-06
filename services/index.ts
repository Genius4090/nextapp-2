export const getRequest = async (URL:string) => {
try{
    const data = await fetch(`http://localhost:4000${URL}`)
    const res = data.json()
    return res
}catch(err){
console.log(err);
}
}