

export const existsError = async function(service, endpoint, id){
    let url = "http://localhost:8080/error/exists-error/"+service+"/"+endpoint+"/"+id;
    console.log("Consumiendo localhost...");
    window.alert(url);
    try{
        let response = await fetch(
            url,
            {
                method:'GET',
                mode:'cors'
            }
        );
        let rdo = response.status;
        let datos = await response.json();
        switch(rdo)
        {
                case 200:
                    {
                        return( {rdo:0, mensaje:"ok", existsError: datos.exists});
                    }
                default:
                    {
                        return({rdo:1, mensaje:"Ocurrio un error"});
                    }
        }
    } catch(e){
        console.log("Ocurrio un error al invocar getFeaturedPosts() ");
    }
}