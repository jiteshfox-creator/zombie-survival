using UnityEngine;

public class CarController : MonoBehaviour
{
    public WheelCollider frontLeft;
    public WheelCollider frontRight;

    public WheelCollider rearLeft;
    public WheelCollider rearRight;

    public float motorForce = 1500f;
    public float steeringAngle = 30f;

    void FixedUpdate()
    {
        float move =
            Input.GetAxis("Vertical");

        float turn =
            Input.GetAxis("Horizontal");

        rearLeft.motorTorque =
            move * motorForce;

        rearRight.motorTorque =
            move * motorForce;

        frontLeft.steerAngle =
            turn * steeringAngle;

        frontRight.steerAngle =
            turn * steeringAngle;
    }
}