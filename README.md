Para poder obtener los datos es necesario hacer una peticion post a https://accounts.spotify.com/api/token para poder tener un token
con el header:
key -> Content-Type value-> application/x-www-form-urlencoded
y el body:
key-> grant_type value->client_credentials
key -> client_id value-> d6b55734aa3f4b49af89ae8023b6c69e
key -> client_secret value -> 4659ca881ead4eed81c45197f071db34

una vez obtenido el token en postman hay que actualizarlo en spotify.service.ts en el header de authorization
LA KEY SOLO DURA 1H!!!
