import { Container, Heading, Flex } from "@linkto/gamut";
import type { FC } from "react";
import TestimonialCard from "./TestimonialCard";

const Testimonials: FC = () => {
  return (
    <section className="bg-mauve-300 pb-28 md:px-9 sm:px-6 px-4">
      <Container className="py-24 bg-black rounded-3xl">
        <h2 className="text-mauve-300 sm:text-5xl text-4xl font-semibold !leading-normal">
          Trusted by thousands of{" "}
          <span className="text-mauve-950">
            artists, writers, musicians, podcasters, youtubers, gamers,
            developers, hobbyists, brands...
          </span>
        </h2>

        <Flex className="xs:justify-between justify-center flex-wrap mt-20">
          <TestimonialCard
            name="Zaid Mukaddam"
            username="zaid"
            image="https://fphlnlfccwbymdowdqjd.supabase.in/storage/v1/object/public/pavatars/1645545061544.png"
          />

          <TestimonialCard
            name="Coming soon"
            username="soon"
            image="https://qatejhwdylvqgwcegrjn.supabase.in/storage/v1/object/public/avatars/default-avatar.jpg"
          />
          <TestimonialCard
            name="Coming soon"
            username="soon"
            image="https://qatejhwdylvqgwcegrjn.supabase.in/storage/v1/object/public/avatars/default-avatar.jpg"
          />
          <TestimonialCard
            name="Coming soon"
            username="soon"
            image="https://qatejhwdylvqgwcegrjn.supabase.in/storage/v1/object/public/avatars/default-avatar.jpg"
          />
          <TestimonialCard
            name="Coming soon"
            username="soon"
            image="https://qatejhwdylvqgwcegrjn.supabase.in/storage/v1/object/public/avatars/default-avatar.jpg"
          />
        </Flex>
      </Container>
    </section>
  );
};

export default Testimonials;
