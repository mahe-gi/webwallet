### Web Wallet

#### Getting Started

Follow these steps to set up and run the project:

1. **Build the Docker image**:
    ```bash
    docker build -t webwallet .
    ```

2. **Run the Docker container**:
    ```bash
    docker run -p 27017:27017 -d webwallet 
    ```

3. **Set up the frontend**:
    ```bash
    cd frontend
    npm install
    npm run dev
    ```
    The frontend will be available at [http://localhost:5173](http://localhost:5173).

4. **Set up the backend**:
    ```bash
    cd backend
    npm install
    npm run start
    ```
    The backend will be available at [http://localhost:3000](http://localhost:3000).
