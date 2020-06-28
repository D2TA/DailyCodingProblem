// Order Log will be our array/database of order details
var OrderLog = [];
var Letters  = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ');

const t0 = new Date().getTime();

//      | OrderNum | RecordDate | ProductID | CustomerID | OrderStatus
    // Ideally, CustomerID will be linked to a Customer Table
    // Ideally, ProductID will be linked to a Product Catelog Table
    // Ideally, OrderStatus will be Active, Shipped, Recieved, Cancelled and Issue
        // Completed indicates
        // Cancelled indicates orders that are cancelled
        // Active indicates that the order is still being processed

function record(ProductID, CustomerID){
    var recordDate = new Date();
    var OrderID = OrderLog.length;
    // Format of the Date is ISO 8601 Extended Format:
        // `YYYY-MM-DDTHH:mm:ss.sssZ`
            // T: Indicates the start of time
            // Z: If Z is present, then the date will be set to UTC, if not then it is Local Time
    OrderLog.push([OrderID,recordDate, ProductID, CustomerID]);
};

function get_last(i){
    var OrderID = OrderLog.length;
    if (i > OrderID){
        console.log('Please try again, with another value. There are : ' + OrderID.toString() + ' Orders in Total.')
    } else {
        console.log(OrderLog[OrderLog.length - i]);
    };
};

function endExecution(StartTime){
    const EndTime = new Date().getTime();
    console.log('Time to Execute took ' + ( (EndTime - StartTime)/1000 ).toString() + ' milliseconds.');
};




for (i = 0; i < 1000000; i++){
    var randomProductNum = Math.floor(Math.random() *100);
    if (randomProductNum < 100){
        var randomProductString = '0' + randomProductNum.toString();
    } else {
        var randomProductString = randomProductNum.toString();
    };
    var randomCustomerNum = Math.floor(Math.random() *10000);
    var InsertProduct = Letters[Math.floor(Math.random() * (Letters.length - 0) + 0)] + randomProductString;
    var InsertCustomer = 'CUST' + randomCustomerNum.toString();
    record(InsertProduct, InsertCustomer);
}

    // The setTimeout() method calls a function or evaluates an expression after a specified number of milliseconds.
    // 1000 ms = 1 second.
    // Syntax: setTimeout(function, milliseconds, param1, param2, ...)

setTimeout(function() {
    record('K102','CUST2992')
    get_last(957212)
    endExecution(t0)
},100);

