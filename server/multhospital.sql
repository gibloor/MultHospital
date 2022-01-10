PGDMP                 
         z            multhospital    14.0    14.0 (               0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    16394    multhospital    DATABASE     i   CREATE DATABASE multhospital WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'Russian_Russia.1251';
    DROP DATABASE multhospital;
                postgres    false            �            1259    16403    accounts    TABLE       CREATE TABLE public.accounts (
    id integer NOT NULL,
    login character varying(20),
    name character varying(20),
    password character varying(20),
    image character varying(250),
    test_passed boolean DEFAULT false NOT NULL,
    involvement character varying(20)
);
    DROP TABLE public.accounts;
       public         heap    postgres    false            �            1259    16402    accounts_id_seq    SEQUENCE     �   CREATE SEQUENCE public.accounts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.accounts_id_seq;
       public          postgres    false    212                       0    0    accounts_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.accounts_id_seq OWNED BY public.accounts.id;
          public          postgres    false    211            �            1259    32769 
   characters    TABLE     u   CREATE TABLE public.characters (
    id integer NOT NULL,
    multfilm_id integer,
    name character varying(30)
);
    DROP TABLE public.characters;
       public         heap    postgres    false            �            1259    32768    characters_id_seq    SEQUENCE     �   CREATE SEQUENCE public.characters_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.characters_id_seq;
       public          postgres    false    218                       0    0    characters_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.characters_id_seq OWNED BY public.characters.id;
          public          postgres    false    217            �            1259    16412 	   multfilms    TABLE     �   CREATE TABLE public.multfilms (
    id integer NOT NULL,
    involvement character varying(20),
    name character varying(30),
    serial_number integer
);
    DROP TABLE public.multfilms;
       public         heap    postgres    false            �            1259    16411    multfilms_id_seq    SEQUENCE     �   CREATE SEQUENCE public.multfilms_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.multfilms_id_seq;
       public          postgres    false    214                       0    0    multfilms_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.multfilms_id_seq OWNED BY public.multfilms.id;
          public          postgres    false    213            �            1259    16396 	   questions    TABLE     P  CREATE TABLE public.questions (
    id integer NOT NULL,
    topic character varying(10),
    level character varying(20),
    question character varying(100),
    image character varying(255),
    answer character varying(30),
    blende1 character varying(30),
    blende2 character varying(30),
    multfilm character varying(30)
);
    DROP TABLE public.questions;
       public         heap    postgres    false            �            1259    16395    questions_id_seq    SEQUENCE     �   CREATE SEQUENCE public.questions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.questions_id_seq;
       public          postgres    false    210                        0    0    questions_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.questions_id_seq OWNED BY public.questions.id;
          public          postgres    false    209            �            1259    16419    watched    TABLE     �   CREATE TABLE public.watched (
    id integer NOT NULL,
    multfilm character varying(40),
    user_id integer,
    viewed boolean DEFAULT false,
    level character varying(20)
);
    DROP TABLE public.watched;
       public         heap    postgres    false            �            1259    16418    viewed_id_seq    SEQUENCE     �   CREATE SEQUENCE public.viewed_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.viewed_id_seq;
       public          postgres    false    216            !           0    0    viewed_id_seq    SEQUENCE OWNED BY     @   ALTER SEQUENCE public.viewed_id_seq OWNED BY public.watched.id;
          public          postgres    false    215            q           2604    16406    accounts id    DEFAULT     j   ALTER TABLE ONLY public.accounts ALTER COLUMN id SET DEFAULT nextval('public.accounts_id_seq'::regclass);
 :   ALTER TABLE public.accounts ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    211    212    212            v           2604    32772    characters id    DEFAULT     n   ALTER TABLE ONLY public.characters ALTER COLUMN id SET DEFAULT nextval('public.characters_id_seq'::regclass);
 <   ALTER TABLE public.characters ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    217    218    218            s           2604    16415    multfilms id    DEFAULT     l   ALTER TABLE ONLY public.multfilms ALTER COLUMN id SET DEFAULT nextval('public.multfilms_id_seq'::regclass);
 ;   ALTER TABLE public.multfilms ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    214    213    214            p           2604    16399    questions id    DEFAULT     l   ALTER TABLE ONLY public.questions ALTER COLUMN id SET DEFAULT nextval('public.questions_id_seq'::regclass);
 ;   ALTER TABLE public.questions ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    209    210    210            t           2604    16422 
   watched id    DEFAULT     g   ALTER TABLE ONLY public.watched ALTER COLUMN id SET DEFAULT nextval('public.viewed_id_seq'::regclass);
 9   ALTER TABLE public.watched ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    215    216    216                      0    16403    accounts 
   TABLE DATA           ^   COPY public.accounts (id, login, name, password, image, test_passed, involvement) FROM stdin;
    public          postgres    false    212   �+                 0    32769 
   characters 
   TABLE DATA           ;   COPY public.characters (id, multfilm_id, name) FROM stdin;
    public          postgres    false    218   �2                 0    16412 	   multfilms 
   TABLE DATA           I   COPY public.multfilms (id, involvement, name, serial_number) FROM stdin;
    public          postgres    false    214   43                 0    16396 	   questions 
   TABLE DATA           j   COPY public.questions (id, topic, level, question, image, answer, blende1, blende2, multfilm) FROM stdin;
    public          postgres    false    210   �3                 0    16419    watched 
   TABLE DATA           G   COPY public.watched (id, multfilm, user_id, viewed, level) FROM stdin;
    public          postgres    false    216   �5       "           0    0    accounts_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.accounts_id_seq', 180, true);
          public          postgres    false    211            #           0    0    characters_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.characters_id_seq', 12, true);
          public          postgres    false    217            $           0    0    multfilms_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.multfilms_id_seq', 10, true);
          public          postgres    false    213            %           0    0    questions_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.questions_id_seq', 23, true);
          public          postgres    false    209            &           0    0    viewed_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.viewed_id_seq', 174, true);
          public          postgres    false    215            z           2606    16410    accounts accounts_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.accounts
    ADD CONSTRAINT accounts_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.accounts DROP CONSTRAINT accounts_pkey;
       public            postgres    false    212            �           2606    32774    characters characters_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.characters
    ADD CONSTRAINT characters_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.characters DROP CONSTRAINT characters_pkey;
       public            postgres    false    218            |           2606    16417    multfilms multfilms_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.multfilms
    ADD CONSTRAINT multfilms_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.multfilms DROP CONSTRAINT multfilms_pkey;
       public            postgres    false    214            x           2606    16401    questions questions_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.questions
    ADD CONSTRAINT questions_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.questions DROP CONSTRAINT questions_pkey;
       public            postgres    false    210            ~           2606    16424    watched viewed_pkey 
   CONSTRAINT     Q   ALTER TABLE ONLY public.watched
    ADD CONSTRAINT viewed_pkey PRIMARY KEY (id);
 =   ALTER TABLE ONLY public.watched DROP CONSTRAINT viewed_pkey;
       public            postgres    false    216            �           2606    32775 &   characters characters_multfilm_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.characters
    ADD CONSTRAINT characters_multfilm_id_fkey FOREIGN KEY (multfilm_id) REFERENCES public.multfilms(id);
 P   ALTER TABLE ONLY public.characters DROP CONSTRAINT characters_multfilm_id_fkey;
       public          postgres    false    218    214    3196               �  x��Xے�8}�����-6��T��6��T*����&�M�_��-$�gjZG���D�z̪�y��:�3��?���(Ԧ"���p���ri�($dӴnwё�ςz���/�NE��Q���r���%�;�������d��MSZ�8���:�S�p}ޮ�ۻ�=�[��0�)��n�%2G�C�w�2�n7�D%�k�\��ge4��3�N�3�Σz��������,�j�-q�O���h�f��-d]N�ν.p; IJG�~����ۢ[���<���,��@F�"�K�f>�7}8�:p��;�T_ �y��9h T-���һ�ls��z	�����ʮ/��D#.�[�T�F$G#?#�t��|k� ��N��0�F6���1��P��RΉ�%4���n
������PJ�F�C����g�go�¿E'�=���n������-������j|��0�Ĩ
��������?BO����)L(��L�y��,6��T�M��b�E�U[/V4\4o7}o��	d��e��a�LZ,ޓ���:vDD`J���/���Y�w��kRQMD���d�r�jA��D�v,�����v�aB[w>b�!�ZM���]��E0�L��j*P8�@n1:Z�=���|r���/W��3�~9T<&}�b$��$�L@��ɑpʅ�4�d��tf�e��z��}�Ǵ>���A�w�BX �����˯����OMˑ�,I���#
�~�l�,VD�3�0`U��̆c�^&�@�H��Mf��T�j>���Л��A�'�_9z�m����9Tw�%q{bj�0l�ޮÍx7$��	Sx=6����W�3�	T�qb{[
W6��C陉Ґ�<�������iΉ�c�xGkgJO��W4��)CQ4���t�
�+�
o-�D��\�&���[A��0ޅdK8���~w>�r:*�Ƚ;ZV�FON-p)
�
"���PE�z��'�l8z�M�Sa��_R�:���5Z��:A��  ���t
\ƛ!��lBmKtkOo\�����>K��R�.o�ބdE�Z�R�#b6Gk�rZ^;Wܖ��W��<�]�����ۄ���f��O��;���(Q�ש?��3��`�OF���hj�wMٽ�:b-��0xa�4��~@|���	9�� ��J�v���1��AL@&�2����[�R�|��XL�ntg�g�)�IM�ָ�B3���tS�{��n~��d�G��v��Y�43a��t�
���5�-]��E�n�������ᆥ3�Xq�F���0! ���ʘU����̓�	���!p0�tՃ�c���� �k�!�N%E�,c�U���7c��\L����ׯ_����k^*�顗�=��愲FIl:��'���ei0�z�
w�Q2_���a������~$$p���*%�;�W�*%����OH	O`���:)�{L%���岗��q�B �ڇ�
!�����
!��g�UJb��bo��#%�[�~|?|��JI�KZ;V�!��g�UJb�n��V�z��;Q�f�3�VJ�Zt�ۀ�U�����(�K���-W��>�B}�/Ň^�"������}6AfE���3d^��)-2�.��S}y�om��2���[̐�<g�΋��wC>}~BJx�>}����x#6>=�� *����!����C��o_�p��t��*5�������UǶ<�U����F�'�?�Uu�c}\!$0����Y�������%*ʮ��3��;S�J�U�BH跟_^^��ܞ         �   x�-ͱ�0���0������������69��<��8~��K���nM����	��bcu� eџ��U4{�.T�f�E.v��)Xt��+�\��ғ�l�)�� ��k0�����F:�K��
�S�)�ƀ���8%�.����z�� �	G<�         �   x�E���0E��qiD�ԅ����nj�a�v������ a{�����5\$V�H@�1d!EU�nĮ�vL��y�FB,�ŰL%�}�d��E�m u�F�R,��u�o�躜�,�׃$S%QsŶ�7�'#�ʇ���'�>P%U^WSq׭�F�"H�s!��E�         �  x��TMo�0=ӿB��:]���2l��"H�2 `d&R"S�>�ߏu��)v�`˰����G��̬�}z�!��}]{���Fp��V����w���C�����r0r4y5yLP�����b����!U��T�6��Q������ڴ�f���N{�<�p��W}���T�@���`�6j�5��VJ�P"u��3@�J���vk���حϝ��˄w&V�x�!mѩ�Exp�w�<������W{�-lM�E Z�̻��7�:S��M�*�- s{N*n�%8#��z��6*&L9*L]�����֘�R����}���R��9L	9�UNbM�Гgr-t.L,2��Mn��+S�;R�l�BT7ā�)���@0��{�{�Ij7�:'-�H�t�u����V�*g�}BQ^~T�e�V��.�/r�s2S�������`��JkP챜��#'x�c�xgeٓ<Y�J��>u�+ʳ����V�����x������`��P�(��©>            x�u�=o1�g�Wx�X���1�
�E�1��ڈc;W�N����|$�W�/y�HQ�;��=~�6^����j����|P�������������zӓz���{��]v�_��Z�I�j��zZ�����EtK۝����ey�0[�S_6����t�h���v}^��\����q�<�������q�/�ˮX����ɿ1���3ENm�R�MM��`#�N�w`�%���@��6��}ݰ���F��T�ݘ#�BtV�":[<�{R����t� ���%9� �O���������rw�S��Ԕ�90	Y�@�f�ER=�� u�A��4A�;'�z���<�U�D�J��^���]�\F�
�H�,[v�c��:�3K��n��!I\�枙ȾF>�m�FϨ�%j�iF��\_#ahf��u>�Ŕ*s��ѵ�TCW��l�-l�I�U�u�nC��~
�7�Sh\����uz�&��%[��H��1��{R�vJ 2 W�=K����:�j;����*�J�#����Υ.|���A�2���+�w�QV�����j��p �2��h`e���l!A�� "���&��p��hЙe�2A�t��65#w������4*>��JK�lE&,r�〭���z+&��HXdUN�X��m�hP<:A�HS���t���,`�vCX k:�	N]g�A�Hr:I���8�}���>�{�. ���~@��ߐ����5T5 Ka�����M��4�� ���x��r�T�=~>}\�V��X<�     