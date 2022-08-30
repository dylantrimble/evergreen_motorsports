package main

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
	"github.com/joho/godotenv"

	_ "github.com/go-sql-driver/mysql"
)

// Product Struct
type Products struct {
	ID        int    `json:"id"`
	Title     string `json:"title"`
	Image     string `json:"image"`
	Alt_image string `json:"alt_image"`
	Price     int    `json:"price"`
	Category  string `json:"category"`
	Prod_desc string `json:"prod_desc"`
	Featured  bool   `json:"featured"`
}

// init products var as a slice Products struct
var products []Products

// connect to ENV file
func goDotEnvVariable(key string) string {

	// load .env file
	err := godotenv.Load(".env")

	if err != nil {
		log.Fatalf("Error loading .env file")
	}

	return os.Getenv(key)
}

// Connect to the DB
func dbConn() (db *sql.DB) {

	dbDriver := goDotEnvVariable("DB_DRIVER")
	dbUser := goDotEnvVariable("DB_USER")
	dbPass := goDotEnvVariable("DB_PASS")
	dbNAme := goDotEnvVariable("DB_NAME")
	dbTCP := goDotEnvVariable("DB_TCP")
	db, err := sql.Open(dbDriver, dbUser+":"+dbPass+dbTCP+dbNAme)
	if err != nil {
		panic(err.Error())
	}
	return db
}

// Get all products
func getProducts(w http.ResponseWriter, r *http.Request) {
	db := dbConn()
	selDB, err := db.Query("Select * FROM Products")

	if err != nil {
		panic(err.Error())
	}

	products := Products{}

	// Products struct as a slice
	res := []Products{}

	defer db.Close()
	defer selDB.Close()
	// looping through the DB response to assign the values to products sruct
	for selDB.Next() {
		var id, price int
		var title, image, alt_image, category, prod_desc string
		var featured bool
		err = selDB.Scan(&id, &title, &image, &alt_image, &price, &category, &prod_desc, &featured)
		if err != nil {
			panic(err.Error())
		}

		products.ID = id
		products.Title = title
		products.Image = image
		products.Alt_image = alt_image
		products.Price = price
		products.Category = category
		products.Prod_desc = prod_desc
		products.Featured = featured

		res = append(res, products)
	}
	jsonData, err := json.Marshal(res)
	rawIn := json.RawMessage(jsonData)

	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}
	if err != nil {
		panic(err.Error())
	}
	if err = selDB.Err(); err != nil {
		panic(err) // Error related to the iteration of rows
	}
	newString := json.NewEncoder(w).Encode(&rawIn)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}
	// Error printed to console (nil if no error occurs)
	fmt.Println(newString)

	defer db.Close()
}

func main() {
	fmt.Println("Server Running")

	//  Mock Data
	// products = append(products, Products{ID: "1", Title: "BC-Racing BR Series - e36 Sedan", Image: "main.jpg", Alt_image: "alt.jpg", Price: "$1400.00", Category: "suspension", Prod_desc: "The best coilovers on the market", Featured: "True"})

	// Initialize the router
	r := mux.NewRouter()

	// Route Handlers / Endpoints

	r.HandleFunc("/api/all-products", getProducts).Methods("GET")

	log.Fatal(http.ListenAndServe(":8080", handlers.CORS()(r)))
}
