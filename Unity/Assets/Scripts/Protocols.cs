using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Protocols : MonoBehaviour
{
    public class Packets
    {
        public class common
        {
            public int cmd;
            public string message;
        }

        public class req_data : common
        {
            public int id;
            public string data;
        }
        public class res_data : common
        {
            public req_data[] result;
        }
    }
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        
    }
}
