"use client";

import { toast } from "react-hot-toast";
import axios from "axios";
import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";

import { SafeReservation, SafeUser } from "../types";

import Heading from "../components/Heading";
import Container from "../components/Container";
import ListingCard from "../components/listings/ListingCard";

interface ReservationClientProps {
  reservations: SafeReservation[];
  currentUser?: SafeUser | null;
}

const ReservationsClient: React.FC<ReservationClientProps> = ({
  reservations,
  currentUser,
}) => {
  //7:24:27
  return (
    <Container>
      <Heading title="Reservations" subtitle="Bookings on your properties" />
    </Container>
  );
};

export default ReservationsClient;
