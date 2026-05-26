using UnityEngine;

public class CameraManager : MonoBehaviour
{
    public GameObject firstPersonCam;
    public GameObject thirdPersonCam;

    bool firstPerson;

    void Start()
    {
        firstPerson = false;

        firstPersonCam.SetActive(false);
        thirdPersonCam.SetActive(true);
    }

    void Update()
    {
        if(Input.GetKeyDown(KeyCode.V))
        {
            firstPerson = !firstPerson;

            firstPersonCam.SetActive(firstPerson);

            thirdPersonCam.SetActive(!firstPerson);
        }
    }
}