export async function fetchApod(){
    try{
        const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=ok9oj4qKXW9jtNqvByj4bNp71CEzZSXGYvuwehOF')
        const result = await response.json()
        return result
    } catch(error){
        console.log(error.messsage)
    }
}
