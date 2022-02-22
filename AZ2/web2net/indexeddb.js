function AZIndexedDB(ActionType, Name, Value)
{
    var _IndexedDBName = "Testbase";
    var _IndexedDBConnection = {};
    var _IndexedDBTransaction = {};
    var _IndexedDB = {};

    if (CheckIndexedDB() === true)
    {
        if (ActionType == "set")
        {
            var _Request = _IndexedDBConnection.open(_IndexedDBName, 1);
            _Request.onsuccess = function (e)
            {
                SetIndexedDBContent(e);
            };
            _Request.onupgradeneeded = function (e)
            {
                SetIndexedDBContent(e);
            };

            function SetIndexedDBContent(e)
            {
                _IndexedDB = e.target.result;
                if (e.type == "success")
                {
                    var transaction = _IndexedDB.transaction([Name]);
                    var objectStore = transaction.objectStore(Name);
                    var request = objectStore.get(Value.id);
                    request.onerror = function (event)
                    {
                        var customerObjectStore = _IndexedDB.transaction(Name, "readwrite").objectStore(Name);
                        customerObjectStore.add(Value);
                    };
                    request.onsuccess = function (event)
                    {
                        console.log(request.result.Name);
                    };
                }
                else
                {
                    if (!_IndexedDB.objectStoreNames.contains(Name))
                    {
                        var objectStore = _IndexedDB.createObjectStore(Name, { keyPath: 'id', autoIncrement: true });
                        objectStore.transaction.oncomplete = function (event)
                        {
                            var customerObjectStore = _IndexedDB.transaction(Name, "readwrite").objectStore(Name);
                            customerObjectStore.add(Value);
                        };


                        //var transaction = _IndexedDB.transaction([Name], "readwrite");
                        //var addReq = transaction.objectStore(Name).add(Value);

                    }
                }

            }

            //var objectStore = transaction.objectStore("customers");
            //customerData.forEach(function (customer)
            //{
            //    var request = objectStore.add(customer);
            //    request.onsuccess = function (event)
            //    {
            //        // event.target.result === customer.ssn;
            //    };
            //});



            //var addReq = _IndexedDB.objectStore(Name).add(Value);
            //objectStore = _IndexedDB.createObjectStore(Name, { keyPath: 'id', autoIncrement: true });
            //objectStore.transaction.oncomplete = function (event)
            //{
            //    var customerObjectStore = db.transaction("customers", "readwrite").objectStore("customers");
            //    customerData.forEach(function (customer)
            //    {
            //        customerObjectStore.add(customer);
            //    });
            //};

        }
    }
    else
    {
        IndexedDBError("IndexedDB not supported.");
    }

    function CheckIndexedDB()
    {
        try
        {
            _IndexedDBConnection = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
            _IndexedDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
            if (_IndexedDBConnection && _IndexedDBTransaction)
            {
                return true;
            }
            else
            {
                return false;
            }
        }
        catch (e)
        {
            return false;
        }
    }

    function IndexedDBError(consoleText)
    {
        console.error("IndexedDB Error\n" + consoleText);
    }
}