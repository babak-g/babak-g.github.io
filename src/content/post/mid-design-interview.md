---
title: "Mid Design Interview"
publishDate: "02 September 2023"
description: "Dusting off the interview cobwebs"
tags: ["interview", "blog"]
---

Yesterday, I was fortunate enough to be given the opportunity to dust off the cobwebs and partake in a final-round design interview! For those unfamiliar with software engineering interviews, these are typically hour-long discussions where an interviewer asks the SWE candidate to design some random software system. Examples of questions could be anywhere from designing:

- Facebook Messenger
- Dropbox
- Tinder

tldr: A large variety of topics can be asked and this may sound daunting since the question bank of designs is limitless, BUT these interviews are generally aimed to understand a candidate's thought process & reasoning by seeing how they trade-off solutions [or so I thought]. The interview should be less about how accurate a candidate can design Netflix, but rather why they chose certain design pieces over others. The rationale here is that some mid-level or even super-senior engineers can be really smart, but coming up with a full e2e system that can generate millions of dollars would be unreasonable. And if the candidate would be able to do that, then they probably shouldn't be interviewing in the first place.

Enough about background, let's get back to talking about ME. On Friday, I was asked arguably the easiest question in design interview history: TinyUrl. Not to throw shade at TinyUrl engineers that their system is non-complex, but any SWE who has ever studied for an interview has probably come across this design study guide:

Grokking the System Design Interview
Literally. The first question on this study guide is "Design TinyUrl". Practically, anyone who spent 5 minutes reading this guide would at least remember enough to regurgitate an answer for this question. Lucky for me, I practiced this problem and worked it out beforehand. It's actually one of two problems I had time to prepare for before my final-round interview with this company. But your boy still fumbled the bag.

How, you may ask?

Well, let me tell you. This was a Zoom interview, the interview suggested to write on his notepad on his laptop to take notes. I have a strong preference of doing these interviews in-person over a whiteboard, but we gotta work with what we have. I start the design as many would with these kind of interviews, by:

1. Asking Questions
It is very important to define the functional requirements and what you're building before deep diving into a solution.

2. Defining API methods
What calls are being made to application servers? Details on parameters and return types.

## REST vs. gRPC
After completing step (2), the interview goes, "So, what kind of API are you going to use?". *internal thought* I may have skipped over that trade-off decision while studying, so your boy had to actually use engineering skills to rawdog an answer off the dome. I don't have that much knowledge about various types of APIs and which was better than another, but I somehow wedged this as my answer:

"We can consider a REST or gRPC API. Evaluating the trade-offs between the two, I know that REST passes JSON payloads to the API, which has readability benefits over gRPC, but a con is that passing JSON over-the-wire is larger than what gRPC would pass. The JSON payload wouldn't have that much data stored, since it's mainly the url and maybe some user stats & timestamps, so it wouldn't be significant, but the fact that gRPC passes serialized protocol buffers that only pass the data and corresponding field number [no field name] seems to be advantageous, since I don't think readability of JSON is more desirable than minimal latency improvements."
Boy, was I wrong with that answer. Interviewer immediately goes, "Do you know how difficult it is to set up gRPC on servers. REST APIs are web-native and require no time setting up, so bootstrapping REST is way easier than gRPC; thus REST is more advantageous of an option here."

Well, so much for seeing how the candidate provides different solutions and their decision-making process. The interviewer obviously knows a lot more about this area of the design than I do, but I thought maybe talking out my reasoning would be enough for them to see how I think, but it felt like I failed the interview at this point, which I don't think is the purpose of design interviews. If I were interviewing the candidate, I would maybe ask if bootstrapping/implementation should be considered in the decision process. If the candidate is unaware, using this as a learning opportunity I think would be more beneficial than pointing out incorrectness, but that's just my opinion.

## Hashing
This is where I really got fucked. Fast forward, we start talking about the use-case when a user asks TinyUrl to shorten a URL that has already been shortened. There's really only two options here:

Check storage to see if the original url has been written
Create some hash of the incoming url and see if it exists
Option (1) is pretty expensive since I designed the schema where the key-value store of the database is key-ed off the the short url. So accessing or creating another storage layer to verify a url seems pretty expensive and could rise some inconsistency issues. Option 2 has benefits that we can quickly search the hashed url and see if it exists in our key-value store. The negatives are that collisions may occur if a poor hashing function is used and concurrency can complicate creating the same hash and storing it. After this analysis, the interviewer follows by asking what kind of hash would I use.

At this point, I knew I was really fucked. gg job. Should I just walk out right now? I definitely remember the study guide talking about which hashes were better than others and why. But I skimmed over that, since I was hoping to spend the time on the design where I knew my strengths were.

I deadass responded...SHA-256. He's like what does that do. At this point, I'm really like g fucking g. I then decided being bold and admitting defeat. I said I don't have much experience with the implementation of hashing, I know SHA-256 is widely used, but if I were making this decision, I would research a variety of hashing algorithms and decide which would perform the best passing in a url-sized String and evaluate trade-offs there. I was hoping the interview would say something along the lines, "Oh, no worries, hashing can be complicated. Let's move on the to something else."

But instead, he said. Here's MD5. It accepts strings and returns a 128-bit integer. The short urls only need to be 6-8 characters. How do you convert the 128-bit integer to the alphanumeric unique hash? I said something dumb here, pretty sure it was something along the lines of ASC-II, 0-127 captures all the characters and numbers we need, so we can encode to that, but that was a hail-mary thinking that would stick and make sense, but I had no idea what I was saying. If we wanted to represent A-Z, a-z, 0-9, that would be 62 options which could be captured by 2^6, and we need at most 8 characters, so that's:

6 bits X 8 characters = 48 bits

Truncating and taking the first 48 bits if we only wanted to use alphanumeric would've been the answer, but I was already at a loss for words back when the interviewer was asking me about gRPC vs. REST.

After these LONG last minutes, the interview ends. Super awkward. I bascially apologize to this grown adult for being so inferior-minded and this interviewer gave such an get-out-of-my-face aura. I could genuinely feel the mood shift after how poorly this interview went.

## My Interview Feedback
I think my interviewer was very nice, but I also think all humans are innately good people, so this comment shouldn't mean much. I will say design interviews are a great place to put yourself out there and they do teach you a lot. I think these interviews can vary greatly depending on the interviewer. I will say that if I ever conducted these interviews, I would try my best to make it a non-judgemental space. I want to see the candidate make decisions they don't know the answer to and see how they make data-driven decisions. I think similarly with coding interviews, asking questions that require strong specific knowledge of implementation; such as Djisktra's or Union-Find or SHA-256, don't seem that valuable to me. It'd be a great if the candidate did know about them, but I don't think these are places to dock the candidate because these are all questions are very easily search-able. Give me a beer in one hand and a Chat-GPT in the other and I could answer all those questions to your desire. Asking the candidate whether they would use a relational vs. non-relational datastore or where bottlenecks are currently in the design or even places where we can introduce latency improvements (i.e caching mechanism) would be far greater indicator of hiring vs. non-hiring a candidate.

FWIW, if I were interviewing myself, I would 110% give myself a strong no-hire. Us, humans, really are self-critical.

Biggest Pros of Taking a Fat L
Learning! Here is some information I learned throughout my hour interview.

What is a REST API? What is gRPC? Which is better

I name-dropped Representational State Transfer when I was answering this question, but what does it really mean? After some quick research, REST is a resource-oriented API that supports only unary requests. Example: getBook/bookid/# or createBook/ which revolve around the resource: Book and the design paradigm is around processing 1 resource at a time. gRPC supports multiple requests and revolve around actions. Example: GetBooks or CreateBooks, which may have more logic in the action interleaved, but focus more on the action rather than the resource. gRPC has more flexibility with supporting 1:1, 1:Many, Many:Many client:server request(s) & response(s). The article also mentions that REST APIs just work meaning that interviewer was correct in that REST APIs work more often than gRPC in that REST can work with any language that has an HTTP Client and are natively supported with any browser, while gRPC is more restricted requiring HTTP/2 or gRPC Web. I think most common browsers are compatible, but This is definitely worth mentioning. Thanks to this person for mentioning that gRPC is faster due to HTTP/2 and protobuf tight packing.
How does SHA-256 work?

What is MD5?

How can we generate unique 6-8 character hashes from MD5?