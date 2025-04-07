class AirlineReservation {
    constructor(capacity = 10) {
        this.seats = new Array(capacity).fill(0); 
        this.capacity = capacity;
        this.renderSeats();
    }

    renderSeats() {
        let seatChart = document.getElementById("seatChart");
        seatChart.innerHTML = "";
        for (let i = 0; i < this.capacity; i++) {
            let seat = document.createElement("div");
            seat.textContent = i + 1;
            seat.classList.add("seat");
            if (this.seats[i] === 1) {
                seat.classList.add("occupied");
            }
            seatChart.appendChild(seat);
        }
    }

    bookSpecificSeat(name, seatNumber) {
        let index = seatNumber - 1;

        if (this.seats[index] === 1) {
            alert(`Seat ${seatNumber} is already booked! Please select another.`);
            return;
        }
        this.seats[index] = 1;
        this.displayBoardingPass(name, seatNumber);
        this.renderSeats();
    }

    displayBoardingPass(name, seatNumber) {
        let seatClass = seatNumber <= 5 ? "First-Class" : "Economy";
        document.getElementById("bpName").textContent = name;
        document.getElementById("bpSeat").textContent = seatNumber;
        document.getElementById("bpClass").textContent = seatClass;
        document.getElementById("boardingPass").style.display = "block";
    }
}

const airline = new AirlineReservation();

function bookSeat() {
    let name = document.getElementById("name").value.trim();
    let seatNumber = parseInt(document.getElementById("section").value, 10);

    if (!name) {
        alert("Please enter your name.");
        return;
    }

    airline.bookSpecificSeat(name, seatNumber);
}
