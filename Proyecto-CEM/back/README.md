abrimos una terminal para el back
instalar las dependencias del back

1º situarse en el back
cd back

2º instalar 
npm install

por si las dudas
npm install mongodb dotenv express-validator        // las use para la conexion de la bd
npm run dev

abrir otra terminal para el front usuarios es la carpeta donde esta el ejecutable para el front
cd Usuarios
npm install
npm run dev

// mongodb conexion
entras a la pagina
vas a seguridad -> acceso a la base de datos 
creas un nuevo user 
ponerle nombre*1 guardarlo en un text 
generar la contraseña*2 guargarla tambien en el mismo text para no olvidar ninguno
se necesitan ambas para la conexion

vas a deployment -> database
al lado de clusters has click en connect
elegi la opcion de drivers
en el 3. copiar
mongodb+srv://<db_username> reemplazar con *1 
:<db_password> reemplazar con *2
@cluster0.ycyg2.mongodb.net/        ?retryWrites=true&w=majority&appName=Cluster0 -> borrar y poner nombre bd que queres crear
este enlace esta en .env en back