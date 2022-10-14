for(i=1; i <= 8; i++)
{
for(j=1;j<=i; j++)
{
document.write(j);
if(j == i)
continue;
else
document.write(' ');
}
document.write('<br/>');
}