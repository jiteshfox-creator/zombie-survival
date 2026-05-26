using UnityEngine;
using UnityEngine.AI;

public class ZombieAI : MonoBehaviour
{
    public NavMeshAgent agent;

    public Transform player;

    public float detectionRange = 20f;
    public float attackRange = 2f;

    public float damage = 10f;

    float attackCooldown = 1.5f;
    float nextAttack;

    void Update()
    {
        float distance =
            Vector3.Distance(
                transform.position,
                player.position
            );

        if(distance < detectionRange)
        {
            agent.SetDestination(
                player.position
            );
        }

        if(distance < attackRange)
        {
            Attack();
        }
    }

    void Attack()
    {
        if(Time.time > nextAttack)
        {
            player
                .GetComponent<HealthSystem>()
                .TakeDamage(damage);

            nextAttack =
                Time.time + attackCooldown;
        }
    }
}