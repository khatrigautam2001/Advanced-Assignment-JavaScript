function foo1() {
    return {
    bar: "hello"
    }; 
}

function foo2() 
{
    return {
        bar: "hello" };
}

//That's because JavaScript interprets

//as return statement followed by block creation (which is ignored in runtime). Not as "return an object". And I really don't know why JavaScript devs made such decision.
