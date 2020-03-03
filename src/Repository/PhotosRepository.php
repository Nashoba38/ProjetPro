<?php

namespace App\Repository;

use App\Entity\Photos;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method Photos|null find($id, $lockMode = null, $lockVersion = null)
 * @method Photos|null findOneBy(array $criteria, array $orderBy = null)
 * @method Photos[]    findAll()
 * @method Photos[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PhotosRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Photos::class);
    }

    // /**
    //  * @return Photos[] Returns an array of Photos objects
    public function findById(Id $id) 
    {
        return $this->createQueryBuilder('photo')
           ->where('photo.id = :myid')
           ->setParameter('myid', $id)
           ->getQuery()
           ->getResult()
        ;
    }
}
