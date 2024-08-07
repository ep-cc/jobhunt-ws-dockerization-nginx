# Full stack app "dockerization"

## Example application
A minimalist full-stack app to practice dockerization. It uses client-side routing
and fetches data through a relative URL.

On the `main` branch, there are three versions of the application.
- The first version uses two servers, a Vite development server for serving the static assets of the frontend, and a simple express.js server with one JSON endpoint. The Vite dev server has a proxy setting for `/api` requests. The respective implementations are in the `frontend` and `backend` folders.
- The second version uses only one single server, an express.js server that serves both the API endpoint and all the static assets. Its code is in the `backend2` folder.
- The third version is similar to the second but is implemented as a dotnet minimal API.

### How to run the application?

#### First version
In the `frontend` folder run `npm run dev` and in the `backend` folder run `node index.js`. The UI can be accessed on `http://localhost:5173`  (the default Vite dev server port).

#### Second version

This solution only works if we build the frontend and move the output of the build into the proper subfolder of `backend2`.

- Run `npm run build` in the `frontend` folder.
- Copy the content of `frontend/dist` into `backend2/frontend_build/dist`.
- Run `node index.js` in `backend2`.

The bash script `build_frontend.sh` runs the first two steps of the above list, but it only works in a bash-compatible terminal.

The UI can be accessed on `http://localhost:4000` (the port that is hard-coded into the second Express server).

#### Third version
Similar to the previous, the frontend build is needed for this to work, but now the assets should be copied into
`backend-dotnet/wwwroot`.

The command `dotnet run` in the `backend-dotnet` folder launches the server.

## Dockerization tasks

Try to create Dockerfiles for all the components and launch the applications using a docker compose file. (There is an example solution on the `reference-solution` branch of this repository.)

### First version

Create a Dockerfile in `frontend` and `backend` and add a `docker-compose.yml` in the root folder so that the two servers can be launched by running `docker-compose up`.

The frontend should be served by an Nginx server, the backend can be still served by an express.js server, but now from a running docker container.

The `docker-compose` command should launch both containers, but only the frontend container should have a port that binds to our host.

### Second version

Now create a Dockerfile in the root folder that builds an image, containing both the Express server and the static build of the frontend. Expose the port of this server.

The reason why this Dockerfile should be placed in the root folder is that it needs to access both the `frontend` and the `backend2` folders' contents.

### Third version

A second Dockerfile has to be added to the root folder, for example, `Dockerfile-dotnet`. In the compose file
it can be specified, which Dockerfile should be used to build a specific service.
