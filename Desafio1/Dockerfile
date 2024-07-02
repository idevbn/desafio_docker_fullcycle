FROM golang:1.20-alpine AS build

WORKDIR /app

COPY . /app

RUN CGO_ENABLED=0 && \ 
    GOOS=linux  && \
    go build -o full_cycle_rocks main.go

FROM scratch

WORKDIR /app

COPY --from=build /app/full_cycle_rocks ./

CMD [ "./full_cycle_rocks" ]