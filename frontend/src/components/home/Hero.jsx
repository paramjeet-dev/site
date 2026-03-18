import React, { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Hero = ({ images = [] }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const defaultImages = [
    {
      url: 'https://www.google.com/imgres?q=college%20images%20siet%20nlk&imgurl=https%3A%2F%2Fimage-static.collegedunia.com%2Fpublic%2FreviewPhotos%2F504099%2Fsiet%2520nlk%25202.jpg&imgrefurl=https%3A%2F%2Fcollegedunia.com%2Fcollege%2F58472-state-institute-of-engineering-and-technology-nilokheri%2Fgallery&docid=W7Qixj_r4zykpM&tbnid=jkfHKr-lplZRnM&vet=12ahUKEwjvrreo4aiTAxXQwjgGHRxMGNIQnPAOegQIExAB..i&w=766&h=361&hcb=2&ved=2ahUKEwjvrreo4aiTAxXQwjgGHRxMGNIQnPAOegQIExAB'
    },
    {
      url: 'https://gecnilokheri.ac.in/images/Fresher/Fresher6.JPG'
    },
    {
      url: 'https://www.google.com/imgres?q=college%20images%20siet%20nlk&imgurl=https%3A%2F%2Fimage-static.collegedunia.com%2Fpublic%2FreviewPhotos%2F504666%2FWhatsApp%2520Image%25202023-12-01%2520at%252015.49.27_29afc901.jpg&imgrefurl=https%3A%2F%2Fcollegedunia.com%2Fcollege%2F58472-state-institute-of-engineering-and-technology-nilokheri%2Fgallery&docid=W7Qixj_r4zykpM&tbnid=kxfj30F1DlI-7M&vet=12ahUKEwjvrreo4aiTAxXQwjgGHRxMGNIQnPAOegQIHBAB..i&w=1078&h=796&hcb=2&ved=2ahUKEwjvrreo4aiTAxXQwjgGHRxMGNIQnPAOegQIHBAB'
    },
    {
      url: 'https://gecnilokheri.ac.in/images/Sports26_9.jpg'
    },
    {
      url: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUTEhIWFhUWGBkYGBcYGBoaGBgaGh4XFhgXGBgaHSggGBolHRoYIjEhJSkrLi4uGB8zODMtNygtLisBCgoKDg0OGxAQGzUlICYtLS8wLS8vLTUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALMBGQMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAGAAEEBQcDAv/EAE0QAAIBAgQDAwcHCgQEBAcAAAECEQADBBIhMQUGQSJRYRMycYGRocEHFCNCUrHRFiQzU2JykqLS4RWCssI0Q3PwF2Pj8SU1RFSTs+L/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQIDBAX/xAAjEQACAgICAwEAAwEAAAAAAAAAAQIRAyESMRNBUQQUImFx/9oADAMBAAIRAxEAPwDT6VKlXonCKnpqegBUqVKkAqcCkBT0BQqVKlQAqelSpDFSp4pUAKlSpUgFSpUqAFSpU9ACpUqVACpUqcUgFFPSpUAKlTgUiKAPJpqc01ACpUqVMBU1PVfxLFlSFUwYk0NjSssKaaH3uM27E+umyCp5F8C9pUqVamQqVKnikA1OBSp6AFSpUqBipUqekAqVKnoAVKlSpAKlSpUAKlSp6AFSpU9ADUqeKekA0U9KlQAq9rXNmA3NcXxiD63spMaTJwNc3NVz8THRSfTXB8e52ge/76nRfFlqa5u4G5A9Jqne8x3Y+3T2CuZIFPkHjLZ8ag6z6ATXB+JjohPp0qvv3UTzmVfEmJ9tV2L5hw1vzro9X47VLnRaxWXNziNzoFHvqst3me6cxkwRPs/Ch3G8+YYebLf9+E1P5V4oMRFwCAWIj+WpU7dF+NxV0U3GucntXbllbeqMVmBrG25PTwqr/LbE/ZHtH9Fe+bsGfnt6FJkqdB3qp++qr5k/2awk5X2dkMePimzd6UV6pV6B5A0U9KlQOhUqelQA1PSpwKQDU8UqU0AKlSrw11R1pAe6VcTiB0Bryb57qY6JFM5gVEa63fXJrgmCdfE1m50Wsdk5r6jrXJsX3CqTFcfwyTmurpvHhuO6qbF894ZfNzN6PxE1Dyr6aRwN9INrF4k6x6q7NcUbkD11R8v8SF+wLwBXMG0P7LMvwr3dxltfOdR6SKfPQni2Wj4xR3n0f3rm2N7l9poaxnNOEt+deWe4b1H4vzbbs2bN5bbOt6cvSI7x46+yp8hSwv4FDYx+8D1fjXF77HdjWdYj5QLx/R2FX07/ABqDY5pxly9aDOApuICB1BYSNIG3hUPMjZfml8NKuXANSfWfxNQ7/FbC73V9Rn7qz/nXygx14eUYL2CADESizEa7zVF83nVpPpM/fUyytOi4fn5JNs1TAcxYe9eFm2+ZyCdIjQSetD2M5/hmVLJlSV1OmhIPd3VTckplx1kgadsH1o/xio3E8ERfvaQBduakgfWPfS5yaKWGClTJuI50xTeaqp7/AIT766cq8YxFzHWVu3CVOfs9JyMRvVR5GBLOImBudonYeI61acr2FGMskFiQQdoEMp8e40KM2wbxKLWrLr5S8OfJWCCRDsDBImQDrH7tAAww7q1TnjDB8Ou3ZuA6nvDDvHfQYuD1ER56g6A6HITqZOzVUsTk7RGPPGEaa2DjWe4Ud8gkraAIIhzv6j8aocRhjlIJbVO+NcrNp4yB7au+S1y2suujHcye/cAd9OOPiycmbmuiy5pw4+cMSJm2Drt9cfCoPzOz3D2UVcW4Z5Vg2aBlAOk9Z+JqN/g37f8AKPxrdUcrTC+lT0q0MhUq8tcUbmuNzGgbAn3UWOmSKeKg/O3OwA99crzvBOY7HwH4UUFFi9xV1YgekxXBuIWx9b3ae3aqDFYm2BL31XeTM/dUR+L4dbT3wTcRWyMVjeA3j3j21LlFdspQk+kEtziQGgFQXxrXGWB5ssOnh40I4nnhdfJWJnWW/ufhXviXGsQ2Ct31OR2ZgQNozZRtHSo80PWzX+Nk1egvW6Z+kIA8T+JpsbxfD2UDu4CkwG6E901kl7HX3MNdfXu7I91EN7Dzwm2Ik+UY95881Hnb6Rt/F49v3Re4rn3Cr5gZ/QPjqKbBc2Pfs4m5bthDaCFc2szmmde5ffQGMIRvA9JA9xM0TcpWQcPigGBzBBpP7Y6jvn2VCyZG9ms8OGEdPZTYrm3GXBJcKPCfhA91dOWMRdfGWS9xiMx02Hmt0G9VYVQBKtqxXtdmcsAkCDI1q25UecXb0UZbkdZPZueJ10Hd1qVjk9scsuJJqJA5gwg+d39Nc/wBqOMG32Y9On31dczaYu8AxH0YaNAJzEE5p3gd3SqZrS/RkuPUCT509wHXvqlgvdkfy+KpI0rkhYwSDT640M/XbqKyi5ZMsGZjBI1JOxIrV+SGnCLoB2rmg/fas/4ijLdvrbyyrjZRIBkmSR30Tx3SQseZRbk12VNvCzsvs1+GlFPF8OTw3CSIKuwM6R+kHX0Cqdcxa3nfQ5ZGcdTBgAnWr++3/wAJtkAdl9jr9dhT8NCf6W0qXQLiwJgsJAJgSdhJ6RtXbCWgWRlDtDrsu2oMnfT8K9AK13RGJKfVIjW3sBlPfUjDcJxDJ2cM47anZhOjay59Htq1hiiX+rIy152w352zZVM282rR5qt0kE+bQ7ZuuyEqgkMo7KTuG6kE9KPOZOBXr+It3LeUKEgkmPtbQJ2NVtrke6UIu4galTsWiAwOrEd/uppRWzNzn1ZW8tuRi8PmLZmBkHQDR1279PCufMiKMVihEaBs2pOptnaY60QYTgWEw727jYoZrW0sgB1ZtRqfrGnx+P4WbjXXYXHYQYDsCIAiPN2Ao5xT7BY5yXQFMts2cxYnK8RopOYDXroMvvFWnAmfy+HZQ5QAaakCM66kCOlXlrmLBppYwjH922q/3roeZcS36PBEfvsR7oH30nmiUvzz9l9x7DtcssqiWkED0H8KFbfAcQWYEhQcpUFvshQdBOmg9tS2xvE32W1b9Un7zXg8Mx7+fiiP3f7RUrI/SG8K9yQzcqEnM10DwC+DDedN6fh/ClsMQrMRJOseju8KrbvNq4TNYyPcdGYM5JljO+vT11D4XzW9/EKmQKDJ+8xvS8ib/wBH4pJa6DvjHGrWGtI92YaFEAnWJj2A1Rfl/hfsv7G/CuvO9rNgrZ+y6n3OvxoB8j4VGSck9GuHDGcbZvt5oUmqfE8VtL591R/m+FWfEf0beisQ4jgibjwNA2kzEeFbZZNdHNgxqV2adjeZMPbtrdJLI0gMokaHKR7aqcNzoty9btW7Ldt1XM3cSBMaGaq+IWAOHWNoALE76Z2YxG+9V3LQT53ZAzE+UjYASoJ7591Z3O9G6jjSdssePcyYtLr2kZQoOhA16115WxN28MT5a4X+jUa9JJ/Cq3mlSMQ2UBiVLQcxOjBNANI1q25LBjFzEAWwIj9uZjX20cZN22DnjUeKWwQXCMwmGbx1PvNFOBwpHDboga3WP8qjp6DVCLRuXGy+UaLl/QAvtKgCIgaQBRjwrhlz/D1tZGDlnMOMpEzBI6ULFWwl+jlpICECROYnTN2V6afaI76K8VaH+FWz0Cu4zbeczCY6eivGE5Kvkdt7QJQLPac6ZdwdDtRK/AVbCrhbjEqFKllAUmd4GoWmoJImWecnszUs/ahVACKwYCBJyTDP+8aLLv8A8plu12LhOszox3Hwq3scn4RdTbLEgA5mJkDLGkx9UVaHhlnyfkvJr5PUZI7MbER3VdJLRnyk3tmOXLyIC2ulkHIB+wugYkn3UZfJ27PhbreTZAcsK0k6Nc1HZE9OndRai4a1sLSQI0CjQaD3CmfjNjyb3BcDLbjOV1iaHISizP8AB8sYwqPowsXLjdspsSsEbkbGr/gvK163eW7cuqcr5gozHo4iTEed7q93+fMKPNzv6FI95rxwvnPy1+3aWywDtEsRpoT0PhU+WPRfgn3RYY7lSzdvNeuM5LLkyggLAJPdM699d8PyvhEA+hBjbMS33mhXjvNuMS/ctILYCMQDlJJG4nWqbEcdxz74gr4KAKh5q0ax/LKSs1rC2FQZUUKuugEDXU6CgviHL+FNy497FKvlCCVDIIj0k/dVp8n11zhiXcu3lG1Op+qaicN4Hh7oa61kBjcuAiTHZdlkDpMT66rk3TRnwjFtSICWeE28pN03CsRGc7GfqgCpS8xYQWxas4a5cQahcgyzMzqT18Ks1w2DtpnAtBZjMACJ7pHWpJxVpbiWtncSoA0iCZn1Glcn7HUF1FlMvH8SdLOAy/vGPdApHE8UfYWbfqk+0zVmnFkYX8qsTYmQYGYjNtE/ZNc73EbpsW7tuwSztBQySo7WugHcPbSr/Sv+RRXHhePfz8YV8FEfdFMOUQ36W/df0t+NXV1r/wA4QKo8jl7R0me1HWd8vSvGGw+IzXvKOMrSLcbqNY2A6Ed+1HCIeSX1Ig2eUsMPqT6SfxqWOGYW1EpbWdBMCfRO9eV4OzYY2bl0sS059SdwY1PhXa/wa262lYsfJAZSIEwANdPAU6XpCcre5Ho3bK3BakB21Cxr1PdHQ15w2Ptvdeys5k30gbgaHruK73MBbN0XSvbUQDJ0GvTbqa9phkDFwqhm3aBJ9JqiP6lbgOLi6l1ktmbY2J1YwTGm21d+DYp7tvO9vIZIywRppB1qeiRsKcU1Ym16Rl3NuAb53dIUmSDMaaqvX01B4FhiuJtmB10kTsRtM91GnMllfnALAaop8dGih+MuJskAQ3lFnWfNU9/wqfErsvzuuNBbx6Tw9iGK5SDI3HbHj41n3zn/AM+97P8A1K0dbXl8Ldw4MMwMTsPNgn10N/8Ah/e/W2/5vwrVV7MHfo03ip+ib0H7jWR3MK1y8SqMxlfNUk6d8ade6tb4tfVLZZ9FG/X3UKX+d8Gmilm/dWR7qU2k9hjjJrSIvEeD33wNuzbQh/JAQTGUmCZPfv0rxwLli/bvpduG2FV3aF1Yhlga5d+u9T+O80mxki0WzKrAz3gGCPXULgvNN+/eCG2qLlcyCSdFJG474qPIro1WKTjfolcR5PS9cNy5dfVcsLA0zZ9zNW/C+EWrClba+cZYnUsdT2j13rOsZxzGlmX5wwAJGgA29Aq94vx7EYfBWfJQbjWg5uNqdZOg2JpLJZUsLVP6HCqBsIpr1wKCzMFA3JIAHpJrGeHcycVLq3l7jajQopQ66ggLoPRFX3ynWrl1ipbsLEKTCjYknx8aPJatCeKpUw9wHGMNdYraxFq432VuKx9gNQeZuacPg1m6Szna2glj6Z0UeJrJ+CcKAvWT5RZF23tmmSwjXLHvon+ULAqXdyCYIMCJP1Yk7b+6kpScbopwgpVdkzB/KlYLAXMPcRSfPBDx4ldDHomrb5Qc3kFKsVOYagkaGJrNltWhmHkz2Wy9pp6kdAO6tL+UK6EwrEzoCZABggSDB0O1FScf7CuCknEz04afOJb0kn76LOWcJ+ZYtQu8aRvp0oXsYi4y5g/ZNpWHaVDqqGSobQyTRpyR/wALekydJMkzq3fSWKtmk/0qSpIEFwRAAlVnTUr6xE761Z8uIoxVqHUkOBADbkNpMR0NUtgoVtE9n6V9FEg629yzSKvOWLbfOkKpcA8quZjqsdudlEDbc1SwpbIl+qTvQ3M1oDF3ZDGRnkDsiJEFu/s93UVUXMQgUMEmSw1bujXQDv8AdVtzRy9irvEvK2rJa2FcZpUKSUcDziJ1IqQnKmNKKMtpCC2+TQELGqqe404wi9tEvNkWkwk5EdTYuBSpC33XszoQE0M9ancLswjA9bl0+12PxqHyfwa5hbV5LjKxuYi7eGWYCvlgEkDXTuqzwY0P7zfeaKIbItrgtkWvI5ZSc0Enf0ipRwyZg2UZlEBo1A7gfWfbXY0K8b55w9klbR8q47j2AfFuvqpaQ7bChVAnYVW4/jlm0pYtmj7Ha9+3vrLeM8z38RIdyF+yvZX2dfXS5fx8hrDbGSvxHx9RqHP4Uo/Qvu/KHaPmWWP7xA+41BxHyg3fq2lHpafhQLjFyXCvjSGLUfUU+Jzf1R7qnkx0goxHP+L+r5Mf5Z+NXeK5tv28Ml3sMzZZldNd9orNMTfza6D0CKuuJYn8ztDxX7mpWwpBdgflDYj6TDj0q0e5h8avMHzjhXgMxtn9safxCRWQWLhjQr6yAfZNerl8gecD6Krmw4o3qzeVxmRgy96kEe0V6rHuQ+IC1ild3y24YNvHmnUgb6xWu8PxVu8M1tpGmsEbiRv4VpGVkONAxzpi0tXLTNOqECB3NPxoOxXFg1y2wBGV82sdRlj2UVfKfagWG7jcHtyH4Vnl01MsjTo6MeCEo8ma3wK52/SCPjV/NCfL16XtnvH3g0Vz41qczR75kWbJHf8A2rHfIKNzqsyADuNDOgB1rV8diLl0XVKABWAtkHz1IBzeHdQkOV8Q0yEEzqzEmC5aNARtSlFSYY8jhGkLnYqGtgnUZViQp1AAOvo28ah8m3Q1+QhH0NxpmY1yxsKIeZOWjirofyuQK6sBlk9n1iKfhnL4w5L+Ve4fJtb7W0E5pjv6UlFdsrySrimBGOMXnVcuj25kDTOGY6tofVRPxq39BYmNLFue7bXbShTGWs113J3ZTH7gyxNF3NPZsLHS0g9wFCca0U4TtcgA4EA1y3JOoTTUnW51Jjvo258Gl0+Hp7hQzwXCqL1qB9e2vXYMsUTc+jX0uPuNJSXEbwyUkn7Bvg4X5wkL/wDUWhv3N0AiNqvPlJSbd0ASWIAHfqp+6areBD84s/8AVT/UKuOe/OH7/wADS53ErwcZqLfYKJnloJEvpGmkt3ekUffKTbLYYoNMxKz3SImgmz5y+kffR7z8v5uD3XF+NJZG4sqWCMZxX0zrDYQKoBYmEVNBGwUTv+z760vkvCoMGkDzs2bxh2AnvrPDR9wPiVrD8Pt3LrZVGfxJ7b6AdTRDI32V+jBCEbiXtrCW10VFA8AB91dgBWa4j5UiW+iwsr3u8E+pVIHtNEnKvONvFkobbW7oUsVPaUgQCVYDpI0IB9NWpxbo5njklbQSmmNZfzR8oGINxrWFAtqNM5ALt4gHRR6ifRVLhea+Iowb5wW/ZdVKn0gAH2EVLyxRawyas2hjFQ+FiRc/6r/A1E4DxU4jDW7zKFZpkAyAQWXSehifXU7gnm3PG60exfjNVZnVaKHnLH2zYu2ldTcEFkB1gEZpjuGtZBxFY7X/AH/71pnMHC7jY5nAHk20JJGoK5W03O9A2Ows2HPcP9rEf6axk3ZrxSSoobeKXqJ9enu/Gl89IIZRBGuk/EmuVvDMR5p9hp2wrdw/iX8amy+MSz41eDql0fW++P7e6qnypqyuWScKgkaMeum7d3pqALA07Y18G/ClsS4+zk1w1ZY26ThbOv1o9gcVBNpdRmOn7P8AerFrQOFXcgN69S3p76NjuPoqQx76Rmu5yDdD62/tXUFcxUINJ6t0nxophziT+X1JSAPrMP5ZH3mtg5JUqjTsVtFfRkC/eDWX8oLmVhH/ADU2/aBWtN5WTJde2CdLNo6/vXU+5RWkFsyk7G+UDAeVsp21TLc3bbVW0HjtWdXeDoPOxK+pZ/3VpPyg2Q2DP7Loffl/3VjnELICklTo3TTfN4HurRwvYllkv6o0Tlq4AbQDZgComInpR1FZnyxci3bPdlP3GtQy00yWRxiUS0ruyouUElmAA0G7GveExdu6ue06Ov2kYMvtBigLnrCFyQWOVQAo6CANh31G5DwoX5yAWH0SgjYSxEaA7gSPWaOTuqBRXG7C3G854G1c8m9/tdcqOyjpqyqRVsb6PbDowZGUkMpkEeBFZJxnBIrliJgbSB1AHTxo94NbycOthOycrN3+c7Hu8aSlJ3ZTUElT2BgQtOVWMzsCfuoy5wsOyZEQsxVQAPAihm5xXGFgvlmglhoOg0FEvPUwSGKkA6gxUxVJmmTNya/woeE8FxIvWi1kqBcQklkGgYTpmmrfm7BtduBVuW0ghu20ToRoIM70P8uT87thnLHyiaFpjrtPhVtz/hwxAgHVd/VTUaRMszlJM58G4OqX7RbE2iQ6kKoJmDtOlSucRYNweXvNbAIiFmSdN+lUnK+EAxVk990nbuk/GpHyiAnE20nQlJGnU+PgKbVIXllJ22ccOuADrFy+xzKBoAJnT6tFvPGNt27YN20biTJAYgyIA23376CMLYGe1pvdU+cPE91GHyg/oh07Q+9afGkS8jbtsoRxGxErg12B7UneO8nvqw40q3OH2WKKg+k0XQKMzDSqe5Anbp948avsfhmfhqKiM7Q8BQSdWboKONIXkbYAcFsJcWcq6EjRww+r1U767UZ8lYNVxBIAB8mw6969/oof5R5axltGD4d1m4xgwNDk138DRpy1wq9bu57iFRlI1YHWR0BPjRGCqwlOTdWZzxe4FxWQbsrQMoMkBiDMabVZ3BljoIbrH2fxNS+M8h4u9iheU2goDDtM06hgNAp7x1qxPJN9sua7bEBgYDHfL3gfZoSQm2X/AC4fzVNfrN/qapvK5JW/JOmIcCegyoYHhrXDhuANiwtssGIJ1iN5O1deVW/4kd18++3aNJjQHc8LGPQyRraO8aT6ah8awwVr6qAALQb2C4PjU/n7E5cWu8lF/wBR/Cm42n0t7xw5+9xSdMaTRmlrDZ8qiJL5RPe0AeirCzwNmt+WzoFyyAWAJgQQASDOndVfYu6esH7qkW8cVEBRtGtQnEvxyJeGtE4aGEdrb1/3qILKnQLMDu8SKl27xbCXG6hx/s/GqtLzDYxIj4/GlySDxyZPuWI3ET4VNt2ALDDuYdZ3yn41SPiXIgsY3qy4cScJf1Mhp9y/hTc0w8TXZwfDgurEAjSQeoB1E+irXHtZNhSloKwcBmmSYAk+uT7KHQT316ik8i+FeB/Qh5EbW8O7I38LVp3DOzjB+1Yj+Byf99ZbyP8Ap7y99h/aIitSsH86wx70vD/9TD7jVRZEo06JXOSzgr3gob+Flb4VieMaQwHUgj/v1mt15gtZ8LfXvtXB68pisJuU5zcdIrFiU9sJOWbs2gPs6eytJ+f+NZbys3ZYftfeB+FFPzpqcXaJnGnRY808MvXM4t2y0gxsOniRTcq8Ev2hiDct5c4UIJUzln7J06b0V/OkG7qPWK8/4hZ28qn8Q/GtNGWwTucrXnJLBRP7RncEbCKt7uHNnCBGglEMxtuTU+5xvCrviLQ/zr+NVvFeJ2b1i8bVxXyo0lTMGNtPVSbRUYtsB8O2e5bJHUD+Jv71onFOF+WcEvAE6ADX1ms5wbhXtsxgBlJ9AIJo4xvOGFt5WZ2hhIORtQdunhWcJ2tm+fDxa4ok2eXUF1LmZpQyNtdI10k12x/A7V5s1zMfAGBp6KpG+UXBDrcPotn4174lz1YssFe3dk6iAvgfteNXzj9MfHPqi3wfAMPbZXW32lJIJZjBOh3MVIxXCrFxg9yyjsNiygkRtE7UIv8AKXZG1i6f4R8a7cY558g4Q4ckkTo48D3eNLyQ+j8U/gWWsBaXzbSCNoUfhQ58oP6O3+/8DVG/ylP0w3tf/wDmrTihvYzC2bi2tWIfKpGgKncmJ3qZTUlSNMeNwmnLoEmOlaVyt/wln90/6jQSeX8T+pPtX+qp5xeNw+DcmFNvRBCtpvrB75qYWts3/Q4ySUWg7zU5rH/yw4gf+YvqQV0wPMPEHvW1a82VnUGEA0JAOsaU/Mjn/jyqzWpryTWS8f4pjlxDpbv3co2j19YqtbiGPO9+/wDxMKTypehxwNq7RsmIOnrqJyyIfFf9VT7bdv8ACgzkNLzNdN53bLkIzMW3D959FG3LuXPiCGBOdZH2SFGh9UGqTvZnJcbQEfKgIxNs/wDlg+xmqZxUfTN42D/q/vXr5TrFlriG5fFs+TIAImdTrvT8Q/TKe+0w/mBoS2ypSXFIyiwNK9EUrNs+b1mIqRbwTtMRoYMso+8++saZ0c4/SZgBODxHgZ9yn4VcW+WsPAOpnvc/AiqzgtvNYxKA6kCPSQw+FTbPMxGVPJiQBr5QgbA/ZrbGl7OXI23/AFJicuYafMH8Tn41AbDKgxltBChQQPShPX0V3u8xXBH0QOxkMzb66xBpsFmuNfZ4HlLaiACIgMNZ8DVzprRMG72Cq17ArtZwjExkfr0qfa4UpQtLghZgqAJ7gZ98Cufgzq8sTvyJ/wAaB9q3cX3A/CtMw764Ju9gP4rbH71FZjygIx1o6fWGjA7qR09NafZuFbNmD5r2lPtCfeRWkVSMJyt2gluW5BB2Ij26VgTcPv7eQufwN+Fb8TWJcxcVvW795TeYBbt1QABsradO6qnFMUMjj0euXsNdts+dGUGInv1omzJ3UHcHxt03yr3GYQdCe4iKJppR60VO72V3HsAot4dWMsLVkN1JJUAnfvM145Vwds3wR0S42w+wR3+NW/OuAsWxZuXsQ6hrdl1Iw7MCAFjUssHTY7TULl67aW92LmZWssqkoF7TRlGhMTOmtHBXZKyyUaRUYmyhusBB1XUEdZ0jfSKKeXrnksFcZEVs10gq/aUrkWZ2od4fgbr3nKKdWXxPZmdBruaMeF4B7WEFvEWnksWKhiG2C6dhpjw76IY1egnllVSBq9zO4UkYLCwFBkKDuRpp6akcyt5TD4e4VRS1q02UaIC3QAbCG0og4Ny5h7zC0bd63bbKMxxIBAEAQDbEsSBoK5c1YJEujCNhMQyoiZLhv21DIhChpNtpPUiSd/GqcfTIU3dmfsdxkHn5Ro22uu9FHOuHAvrETmVRMmeyNBHXTrXG7wDKcxuuEZ5GbXKIkjNIDayNAD4CvPG8ccTf0tsuVs0krBygjee4ab7gdaOCorySvsqhbaF7G5g9jpK+HiavudLYF9IIBLIPNBkZRI129NeeH4FGAjD2WVWg+UuNbgwDqzXV10GkVO5lL3cjphrV4FUYtbuZiGIg5ctySAI6GafjSQvJJ7sCA93IDkMkkfoxtC/s+Joz5nuOmCwxt3Ht/RrqhK9V6AgUKDhKqVRw1vVjkYNm2WNxqD3gDY91WfFMbbOGy53bLaEK5MB8yaKD9UJmPpAprHoXNt0VbXMQXug4i7AmPpiNM6jYtppRZwBCMHdDMzEOslmzd3WgW/iAGI11iWOk9dRvvFaFySDesXBaFt2DgujuBAA31YSCdtttqlJBsH+G3yyoQxiSO04ndfESK7cNxaG8gDqxF62CFcEiXjWJ0o4wVq1h3VMUmEtKdchS2zkEkRbW1JJJ0Ea+monGuW+ItfLWreGWznBQJbw4ZVBlWJdAxbQHUzvT60Kn2wT5muBcYwI6OZ7gATtFcMLfS4DkYHKRPZPUHw8Kn8zcBxZdr96yyBQyMywySyxmkMYU5hv6Kj8JwPzZRnDjygDhvJr9IIMEFlYQJjQ99Ee6HKOrL3kp5u4lY81bWusmVaZmrfg/FcPYu4kXr1u2WdGAdgCRkUSJqou3LqWvK2lZQ6EyUsW2Yq1tUCkIpcQzyTIEDadQTmy873szqQSI1HnR1HQ6Rt1mm0JMJflP4jh8QbRs3kfKGBKnNE7DSpON4th/KWj5e3ojA9tdPN310rPLJ3B8D7J/Gol9pZvSfvNTeytlitz6UREFh0U93WKuuG4qA/YQ9snbYSNNDtVFg8SA6jyaHzNTmnYdzRVlg8eJK5LayTrDRtuRJnan0SxcK4kieWF1z2h2QZP2tBvG4rlfx1xBbyuR2Pfmca9+wqs4pezN5ltcpPmLE/jVhiMcyqkJa+sNbaHZ3HUd0H0k99CAhcV4/iQ2Vbpy5E0yqZ7IJmRr2p9tTuC8TSznLgwwjsifrXPgKouOvLq0AFrakwABuy6AaDapF24Tby9AxMabkvOu/UVPspki048sP+oP9VEXC8S5w5UuYCEAToIIGlVFvit0OAHOUEdBtPoqzwl5zbDNfObMQRInu/vT6JZUcIxnkL63SCQkMQNyOzIE9YNFy86h7LKlgggs6lmnVCb47IXuUDegy/irjFg7swyGJJ30p+FWC2c5oIS4B3ksjKPVqKTaWxho/wApuK6WrI9Tn/fQvxXHveutdaAz9o5RAkgTHWoBFScEge7aQlRmKqcxgRJGuoO3jRNWi8TSeyZyxg3u4hFDAFjlGadSxAHmgmJ67VpP5F3/ANdh/wCNv6KgcB4bh7F1XRWZgZEsqiQZAiCTsPrUb/lE36kew04xpEzyW7KTC843LjlBbW3bKlrTvcJzAEA51y9gmZAE9dqdeOC5ID4a5BE5e2RrI6abVPs8rYRQoFoEKIAZmaB/mJqTa4FhUkrh7InUkWkknvJiSasigN4Fzvc+csHxjeTPlMqJYSZM5M3flHdvAk7z0418oId2V7Vm7bthFVr30bFioLtqDBJ0gR5vWaKV5dwguG6LKi4RBcAhiNokHbwrxiuVsFdBD4a22aMxymTG0sNaQwIu8/21WbeFw3lVUtZa3kfybkZQzSoYDU6g+HWqa1x43At3GXUe7BUvcygkSSBlAAET7vGtQtcqYILkFgZYjKS5WO7KWivOJ5QwFwAPhbZAMiARrt9U0Ww0ZdxTHsyKtq2i9rzgdXmFUnbTwG9QLWIbC3j5fK2hC6kSZEXFkSVBEH11sX5KYPrhww7mZ2HeNC0U+J5TwVxWV8Ja7W5ChWPXzxDe+i2OzLuEc1WrNy4xVL73SJys+URoFy5J9cHevV7iN64Vf5vnRkLJataNbVCqsSSpzAlgdq0tOT8IAFCXAoAAUYi+FAGgAUXIiuicp4EAA4S0wXzQ6+UidTGeY1pWxaMiTGqHF5rpwrAZVW4heVMyemkz06U3F8I6qbqlrpPnfm9y2EA2ZZ7IXTp3+Na3xPlDBX8nlLA+jMpk7AB0+xE7DQ91NiuUMNdnyhxDg7hsVfg+oXAIo2PRh2E4NcuGFDOSQAQNJMmJkRtuaPuXuPW8BhxhMRbupcBZsyG0SwYlvrN0EDrt0o0tcmcPWPzS00CAbgNwgDYTcLGo3HOSMNiXtOc1o2TKeSFtRuGEqUIYSAYNJWmDpldhflJwysqi1dYdXPks49AB16dRXHB844xnuNctPdt3O1aW0gJtLLLkcjfQKdes1bYvk03RFzH40g7qLlpAfAhLQ0r3a5FwQCB0uXMihVz3XgAbDKrBTv1B9wp2xUgW41x7EYkrYsrdtEgsyMADeGlsIZI7PaefELRDwziNq1aS1OFbKPr4oZpOp2s6d3qFX+B4HhbRBtYW0pGzBFzfxb++qxuS8N9Ll8qnlna4+S4Vlm31GoHgNKN3Y/VA3zpj0dA6+Sa5AtIlvEBxDsMxyC0CdB39BQRxK3cIyvbKsFJKMpB1OjaqDEBoPga0uz8l/DlMhLsnT9K/wIr1d+TbBEjKbi66gNObwJYExQ2xpL2YycMxByqWjeN+ntrl/hl6SfJnUnu/Gt3wvImCTZGPpd9PYRUr8ksJ+p/mf+qnonZg9mxeXawDHeoJ95rvnxI2sIP8i/jW4/kthP1P8zf1V6/JbCfqQf8AM/8AVTtCowTE4XEXIm0BH2Qq/ca720xY2SP4fxrdfyYwn6kfxP8A1UjyzhP1I8O0/wDVRaAwPFcMv3WzOgJiOmwnx8af/CL8Zcukzv12mt6HLWFH/JX2v/VXr8nMN+pX2t/VS0PZhlvDYwAKDAAga9PZXQ4bGkQW/m/tW4fk9hullfefjTry9hv1KeynaEYYvC8WTqyf5oPuKGiHhPIWIZvKi5YuCNkcgg9JGRQPQRWp/k9hv1CeyvLct4aZFoKe9Syn2qRSdMZhlu8lxQHAU96iCTvGx08aJOXeWvnOGuXkeBbYqLQTOxICuO1mnXMBtR43IOAJB8kRGujOAfTrr66ueH8Gs2BlsoEUmSB1O0mahKhvjSrsyrHcZU4dRiEaxiA2YW3S8sMjSDnZQhmM2/UCvf8A4iYX9Vc9q/jWuPYkQwVl7iAfcaif4Rh//trP/wCJP6adMWieqimC0qVUxHrKKQpUqEA4pzT0qBnnOa5u5pUqYDZjTzSpUCGU12ApUqTGehTOKelSEchXRBT0qBiO9OBSpUAeopFR3UqVADEaUxUd1KlQB6CAU9KlQB4YV5PwHxpUqBHpBpXsKO6lSoGIiK8JsfTSpUCHG1NmpUqaAbNpXoGlSoYHNjXnNSpUgP/Z'
    }
  ];

  const displayImages = images.length > 0 ? images : defaultImages;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === displayImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [displayImages.length]);

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? displayImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === displayImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <section 
      id="home" 
      className="relative h-[65vh] w-full overflow-hidden"
    >
      {/* Background Images Carousel */}
      <div className="absolute inset-0">
        {displayImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image.url}
              alt={`Campus view ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Carousel Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
        aria-label="Previous image"
      >
        <FiChevronLeft className="text-2xl" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
        aria-label="Next image"
      >
        <FiChevronRight className="text-2xl" />
      </button>

      {/* Carousel Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
        {displayImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentImageIndex
                ? 'w-8 bg-[#E6B325]'
                : 'w-2 bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;